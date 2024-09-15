async function fetchNowPlayingData(){
  const NOWPLAYING_API_URL = 'https://dashboard.radio4voices.com/api/nowplaying'
  const response = await fetch(NOWPLAYING_API_URL);
  const data = await response.json()

  const nowPlaying = data[0].now_playing;
  const song = nowPlaying.song;
  document.getElementById("episode-title").innerHTML = song.title;
  document.getElementById("show-name").innerHTML = 'by ' + song.artist;
  document.getElementById("description").innerHTML = song.lyrics;
}

fetchNowPlayingData()
