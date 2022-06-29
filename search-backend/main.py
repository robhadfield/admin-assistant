import yaml
import pprint
from fuzzywuzzy import fuzz
import numpy as np
import csv
from sentence_transformers import SentenceTransformer, util

pp = pprint.PrettyPrinter(indent=4)


def load_model():
    print("loading model...")
    model = SentenceTransformer("sentence-transformers/paraphrase-albert-small-v2")
    print("model loaded!")
    return model


def read_data(fnames):
    if type(fnames) is not list:
        fnames = [fnames]

    for fname in fnames:
        if fname.endswith("yml"):
            with open(fname, 'r') as stream:
                try:
                    return yaml.safe_load(stream)
                except yaml.YAMLError as exc:
                    print(exc)
                    return None
        elif fname.endswith("csv"):
            data = {}
            with open(fname, mode='r') as infile:
                reader = csv.reader(infile, delimiter="$")
                for row in reader:
                    data[row[1]] = {"name": row[1], "url": row[0]}
            return data


def item_or_list_to_list(item_or_list):
    if type(item_or_list) == list:
        return item_or_list
    else:
        return [item_or_list]

def embed(string, model):
    return model.encode(string, convert_to_numpy=True)

def join_strings(strings):
    if strings is None:
        return None
    return ". ".join(strings)

def combine_and_embed_shallow_attributes(data, model):
    desc_key = "d"
    subitems_key = "i"
    synonyms_key = "s"
    data_processed = {}

    for name, attrs in data.items():
        name_embed = embed(name, model)

        synonyms_embed = None
        synonyms = None
        if synonyms_key in attrs:
            synonyms = item_or_list_to_list(attrs[synonyms_key])
            for s in synonyms:
                if synonyms_embed is None:
                    synonyms_embed = embed(s, model)
                else:
                    synonyms_embed += embed(s, model)
        if synonyms_embed is not None:
            name_embed += synonyms_embed
        
        desc_embed = None
        desc = None
        if desc_key in attrs:
            desc = item_or_list_to_list(attrs[desc_key])
            for d in desc:
                if desc_embed is None:
                    desc_embed = embed(d, model)
                else:
                    desc_embed += embed(d, model)

        data_processed[name] = {
            "name_embed": name_embed,
            "name": name,
            "desc": join_strings(desc),
            "desc_embed": desc_embed,
            "synonyms": join_strings(synonyms),
            "synonyms_embed": synonyms_embed
        }

    return data_processed


def score_fuzzy(search_term, document):
    return fuzz.partial_ratio(search_term, document)/100


def score_embed(search_term, document_embed, model):
    term_embed = model.encode(search_term, convert_to_numpy=True)
    return util.pytorch_cos_sim(term_embed, document_embed).numpy()[0]


def search(data, term, model):
    score_threshold = 0.8

    ranking = []
    for name, item in data.items():
        scores = []
        for attr_name in ["name", "desc", "synonyms"]:
            if item[attr_name] is not None:
                score = score_fuzzy(term.lower(), item[attr_name].lower())
                score += score_embed(term, item[f"{attr_name}_embed"], model)*1.5
                scores.append(score)
        max_score = np.amax(scores)
        if max_score > score_threshold:
            ranking.append((name, max_score))
    ranking = sorted(ranking, key=lambda t: t[1], reverse=True)
    # pp.pprint(ranking)
    return ranking


def show_search_results(data, ranking, search_term, category_name):
    # pp.pprint(ranking)
    print(f"\n\n\n\nResults for '{search_term}' in category '{category_name}'")
    max_num_results = 5
    if len(ranking) > max_num_results:
        ranking = ranking[:max_num_results]
    for i, result in enumerate(ranking):
        print("-"*80)
        result_name = result[0]
        print(f"{i}: {result_name}")
        print(f"   {data[result_name]['desc']}")

data_dir = "data"
data_sources = {
    "event_settings": {
        "files": f"{data_dir}/settings-text-data.yml",
        "name": "Event Settings"
    },
    "get_inspired": {
        "files": f"{data_dir}/community_get_inspired.csv",
        "name": "Get Inspired"
    },
    "ask_the_community": {
        "files": f"{data_dir}/community_questions.csv",
        "name": "Ask the Community"
    },
    "product_lounge": {
        "files": f"{data_dir}/community_product_lounge.csv",
        "name": "Product Lounge"
    },
    "help_center": {
        "files": f"{data_dir}/community_articles.csv",
        "name": "Help Center"
    }
}

def main():
    model = load_model()
    term = "create"
    
    for data_source in sorted(data_sources.keys()):
        data = read_data(data_sources[data_source]["files"])
        category_name = data_sources[data_source]["name"]
        
        data_processed = combine_and_embed_shallow_attributes(data, model)
        ranking = search(data_processed, term, model)
        show_search_results(data_processed, ranking, term, category_name)


if __name__ == '__main__':
    main()
