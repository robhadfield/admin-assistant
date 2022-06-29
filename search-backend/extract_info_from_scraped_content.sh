out_dir="data"
mkdir -p $out_dir

## articles
for FILE in scraped_stuff/community_articles/*.html; do
	tail -n +1253 "${FILE}" | pcregrep -o1 --om-separator=$ -roh  --buffer-size=200000 '(https://community.sli.do/[^>"]+)"></a><div [^>]+><svg [^>]+><path [^>]+></path></svg></div><div class="topic-curation__item-body"><h4 class="topic-curation__title thread-list-block__title">\K([^<]+)' >> "${out_dir}/community_articles.csv";
done


## other community stuff
for D in scraped_stuff/community_*; do
	D_last_elem=$(basename "${D}")
	for FILE in $D/*.html; do
		tail -n +1253 "${FILE}" | pcregrep -o1 --om-separator=$ -roh --buffer-size=200000 '(https://community.sli.do/[^>"]+)" class="qa-topic-title thread-list-block__title-link">\K([^<]+)' >> "${out_dir}/${D_last_elem}.csv";
	done
done
