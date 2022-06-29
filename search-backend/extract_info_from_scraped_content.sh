out_dir="data"
mkdir -p $out_dir

## articles
for FILE in scraped_stuff/community_articles/*.html; do
	tail -n +1253 "${FILE}" | pcregrep -o1 --om-separator=$ -roh  --buffer-size=200000 '(https://community.sli.do/[^>"]+)"></a><div [^>]+><svg [^>]+><path [^>]+></path></svg></div><div class="topic-curation__item-body"><h4 class="topic-curation__title thread-list-block__title">\K([^<]+)' >> "${out_dir}/community_articles.csv";
done


# ## other community stuff
for D in scraped_stuff/community_*; do
	D_last_elem=$(basename "${D}")
	for FILE in $D/*.html; do
		tail -n +1253 "${FILE}" | pcregrep -o1 --om-separator=$ -roh --buffer-size=200000 '(https://community.sli.do/[^>"]+)" class="qa-topic-title thread-list-block__title-link">\K([^<]+)' >> "${out_dir}/${D_last_elem}.csv";
	done
done


## videos
read -r -d '' REGEX << EOM
class="yt-simple-endpoint inline-block style-scope ytd-thumbnail" aria-hidden="true" tabindex="-1" rel="null" href="([^"]+)">
  <yt-image[^>]+>
  </yt-image>
  <yt-img-shadow[^>]+><!--css-build:shady--><img[^>]+></yt-img-shadow>
  
  <div[^>]+><ytd-thumbnail-overlay-time-status-renderer[^>]+><!--css-build:shady--><yt-icon[^>]+></yt-icon><span[^>]+>
  [^<]+
</span></ytd-thumbnail-overlay-time-status-renderer><ytd-thumbnail-overlay-now-playing-renderer[^>]+><!--css-build:shady--><span[^>]+>Now playing</span>
<ytd-thumbnail-overlay-equalizer[^>]+><!--css-build:shady--><svg[^>]+>
  <g class="style-scope ytd-thumbnail-overlay-equalizer">
    <rect[^>]+></rect>
    <rect[^>]+></rect>
    <rect[^>]+></rect>
  </g>
</svg>
</ytd-thumbnail-overlay-equalizer>
</ytd-thumbnail-overlay-now-playing-renderer></div>
  <div[^>]+></div>
  <div[^>]+></div>
</a>
</ytd-thumbnail>
    </div>
    <div[^>]+>
      <yt-formatted-string[^>]+>
      </yt-formatted-string>
      <h4[^>]+>
        <ytd-badge-supported-renderer[^>]+>
        </ytd-badge-supported-renderer>
        <span id="video-title"[^>]+>
          \K([^<\n]+)
EOM
for FILE in scraped_stuff/youtube_videos/*.html; do
	playlist_title=$(cat "${FILE}" | pcregrep -roh --buffer-size=200000 'href="/playlist[^>]+>\K([^<]+)' | tail -1);
	cat "${FILE}" | pcregrep -o1 --om-separator=$ -rohM --buffer-size=200000 "$REGEX" | sed "s/$/\$${playlist_title}/" | sed "s/^/https:\/\/www.youtube.com/" >> "${out_dir}/youtube_videos.csv";
done
