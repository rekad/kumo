const kumoEnEl = document.getElementById('kumo-en')
const wavesEl = document.getElementById('waves')
const kumoJpEl = document.getElementById('kumo-jp')

async function fetchNowPlayingSongs(){
  const NOWPLAYING_API_URL = 'https://dashboard.radio4voices.com/api/nowplaying'
  const response = await fetch(NOWPLAYING_API_URL);
  const data = await response.json()
  return {
    songKumoEn: data[0].now_playing.song,
    songWaves: data[2].now_playing.song,
    songKumoJp: data[1].now_playing.song,
  }
}

function formatUrlsAndLineBreaks(text) {
    if (!text) return '';
    
    const wwwPattern = /(?<!https:\/\/)(?<!http:\/\/)(\bwww\.[^\s]+)/gi;
    text = text.replace(wwwPattern, 'https://$&');

    // Convert Markdown links [text](url) to coded textHTML <a> tags
    const markdownLinkPattern = /\[([^\]]+)\]\((https?):\/\/([^\)]+)\)/gi;
    text = text.replace(markdownLinkPattern, ':%$1:-$2-:$3%:');

    // Convert plain URLs https://example.com to HTML <a> tags
    const urlPattern = /((https?:\/\/[^\s]+[a-zA-Z0-9_.-]))/gi;
    text = text.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');

    // Convert coded text to HTML <a> tags
    const markdownLinkPatternRec = /\:\%([^]+?)\:\-(https?)\-\:([^]+?)\%\:/gi;
    text = text.replace(markdownLinkPatternRec, '<a href="$2://$3" target="_blank">$1</a>');

    // Convert line breaks to <br> tags
    return text.replace(/\n/g, '<br>');
}

async function updatePlayers(){
  const {songKumoEn, songWaves, songKumoJp } = await fetchNowPlayingSongs()
  const stations =  [[kumoEnEl, songKumoEn], [wavesEl, songWaves], [kumoJpEl, songKumoJp]]
  stations.forEach(([stationEl, song], i) => {
    stationEl.querySelector(".episode-title").innerHTML = song.title;
    stationEl.querySelector(".show-name").innerHTML = song.artist ? 'by ' + song.artist : '';
    stationEl.querySelector(".description").innerHTML = formatUrlsAndLineBreaks(song.lyrics);
  })
}

updatePlayers()
setInterval(function() {
    updatePlayers()
}, 5000)

