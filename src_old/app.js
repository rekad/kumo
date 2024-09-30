async function fetchSongData() {
    try {
        const response = await fetch('https://dashboard.radio4voices.com/api/nowplaying');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const nowPlaying = data[0].now_playing;
        const song = nowPlaying.song;

        const songTtitle = song.title || '';
        const songAlbum = song.album || '';
        const songArtist = song.artist || '';
        const songDescription = song.custom_fields?.Description_user || '';
        const songUrl = song.custom_fields?.URL || '';
        const urlLabel = song.custom_fields?.URL_label || '';
        const albumUrl = song.custom_fields?.album_url || '';
        const artistUrl = song.custom_fields?.artist_url || '';
        const songLyrics = song.lyrics || '';
        const dateRelease = song.custom_fields?.date_release || '';
        const spotifyURL = song.custom_fields?.spotify_url || '';
        const appleURL = song.custom_fields?.apple_podcast_url || ''; const donateURL = song.custom_fields?.donate_url || '';
 

        // Format lyrics to hyperlink URLs and retain line breaks
        const formattedLyrics = formatUrlsAndLineBreaks(songLyrics);

        // Update the metadata elements
        if (albumUrl) {
            document.getElementById('song-album').innerHTML = `<a href="${albumUrl}" target="_blank">${songAlbum}</a>`;
        } else if (songAlbum) {
            document.getElementById('song-album').innerText = songAlbum;
        } else {
            document.getElementById('song-album').style.display = 'none';
        }

        if (artistUrl) {
            document.getElementById('song-artist').innerHTML = `<a href="${artistUrl}" target="_blank">${songArtist}</a> - `;
        } else if (songArtist) {
            document.getElementById('song-artist').innerText = `${songArtist} - `;
        } else {
            document.getElementById('song-artist').style.display = 'none';
        }

        if (songUrl) {
            const urlText = urlLabel || songUrl;
            document.getElementById('song-url').innerHTML = `<a href="${songUrl}" target="_blank">${urlText}</a>`;
        } else {
            document.getElementById('song-url').style.display = 'none';
        }

        if (songTtitle) {
            document.getElementById('song-title').innerText = songTtitle;
        } else {
            document.getElementById('song-title').style.display = 'none';
        }

        if (songDescription) {
            document.getElementById('song-description').innerText = songDescription;
        } else {
            document.getElementById('song-description').style.display = 'none';
        }

        if (formattedLyrics) {
            document.getElementById('song-lyrics').innerHTML = foldLyrics(formattedLyrics, 80);
            addToggleLyricsListener();
        } else {
            document.getElementById('song-lyrics').style.display = 'none';
        }

        if (dateRelease) {
            document.getElementById('song-date').innerText = dateRelease;
        } else {
            document.getElementById('song-date').style.display = 'none';
        }

        if (spotifyURL) {
            document.getElementById('spotify-url').innerHTML = `<a href="${spotifyURL}" target="_blank">Spotify</a>`;
        } else {
            document.getElementById('spotify-url').style.display = 'none';
        }

        if (appleURL) {
            document.getElementById('apple-url').innerHTML = `<a href="${appleURL}" target="_blank">Apple Podcast</a> | `;
        } else {
            document.getElementById('apple-url').style.display = 'none';
        }

        if (donateURL) {
            document.getElementById('donate-url').innerHTML = `<a href="${donateURL}" target="_blank">Support the Show</a>`;
        } else {
            document.getElementById('donate-url').style.display = 'none';
        } 

        // JA version
        const JA_nowPlaying = data[1].now_playing;
        const JA_song = JA_nowPlaying.song;

        const JA_songTtitle = JA_song.title || '';
        const JA_songAlbum = JA_song.album || '';
        const JA_songArtist = JA_song.artist || '';
        const JA_songDescription = JA_song.custom_fields?.Description_user || '';
        const JA_songUrl = JA_song.custom_fields?.URL || '';
        const JA_urlLabel = JA_song.custom_fields?.URL_label || '';
        const JA_albumUrl = JA_song.custom_fields?.album_url || '';
        const JA_artistUrl = JA_song.custom_fields?.artist_url || '';
        const JA_songLyrics = JA_song.lyrics || '';
        const JA_dateRelease = JA_song.custom_fields?.date_release || '';
        const JA_spotifyURL = JA_song.custom_fields?.spotify_url || '';
        const JA_appleURL = JA_song.custom_fields?.apple_podcast_url || '';
        const JA_donateURL = JA_song.custom_fields?.donate_url || '';
 
        const JA_formattedLyrics = formatUrlsAndLineBreaks(JA_songLyrics);

        if (JA_albumUrl) {
            document.getElementById('JA_song-album').innerHTML = `<a href="${JA_albumUrl}" target="_blank">${JA_songAlbum}</a>`;
        } else if (JA_songAlbum) {
            document.getElementById('JA_song-album').innerText = JA_songAlbum;
        } else {
            document.getElementById('JA_song-album').style.display = 'none';
        }

        if (JA_songTtitle) {
            document.getElementById('JA_song-title').innerText = JA_songTtitle;
        } else {
            document.getElementById('JA_song-title').style.display = 'none';
        }

        if (JA_artistUrl) {
            document.getElementById('JA_song-artist').innerHTML = `<a href="${JA_artistUrl}" target="_blank">${JA_songArtist}</a> - `;
        } else if (JA_songArtist) {
            document.getElementById('JA_song-artist').innerText = `${JA_songArtist} - `;
        } else {
            document.getElementById('JA_song-artist').style.display = 'none';
        }

        if (JA_songUrl) {
            const urlText = JA_urlLabel || JA_songUrl;
            document.getElementById('JA_song-url').innerHTML = `<a href="${JA_songUrl}" target="_blank">${urlText}</a>`;
        } else {
            document.getElementById('JA_song-url').style.display = 'none';
        }

        if (JA_songDescription) {
            document.getElementById('JA_song-description').innerText = JA_songDescription;
        } else {
            document.getElementById('JA_song-description').style.display = 'none';
        }

        if (JA_formattedLyrics) {
            document.getElementById('JA_song-lyrics').innerHTML = foldLyrics(JA_formattedLyrics, 80);
            JA_addToggleLyricsListener();
        } else {
            document.getElementById('JA_song-lyrics').style.display = 'none';
        }

        if (JA_dateRelease) {
            document.getElementById('JA_song-date').innerText = JA_dateRelease;
        } else {
            document.getElementById('JA_song-date').style.display = 'none';
        }

        if (JA_spotifyURL) {
            document.getElementById('JA_spotify-url').innerHTML = `<a href="${JA_spotifyURL}" target="_blank">Spotify</a>`;
        } else {
            document.getElementById('JA_spotify-url').style.display = 'none';
        }

        if (JA_appleURL) {
            document.getElementById('JA_apple-url').innerHTML = `<a href="${JA_appleURL}" target="_blank">Apple Podcast</a> | `;
        } else {
            document.getElementById('JA_apple-url').style.display = 'none';
        }

        if (JA_donateURL) {
            document.getElementById('JA_donate-url').innerHTML = `<a href="${JA_donateURL}" target="_blank">番組を支援しよう</a>`;
        } else {
            document.getElementById('JA_donate-url').style.display = 'none';
        }


    } catch (error) {
        console.error('Fetch error:', error);
        document.getElementById('song-album').style.display = 'none';
        document.getElementById('song-title').style.display = 'none';
        document.getElementById('song-artist').style.display = 'none';
        document.getElementById('song-url').style.display = 'none';
        document.getElementById('song-description').style.display = 'none';
        document.getElementById('song-lyrics').style.display = 'none';
        document.getElementById('song-date').style.display = 'none';
        document.getElementById('spotify-url').style.display = 'none';
        document.getElementById('apple-url').style.display = 'none';
        document.getElementById('donate-url').style.display = 'none';

        document.getElementById('JA_song-album').style.display = 'none';
        document.getElementById('JA_song-title').style.display = 'none';
        document.getElementById('JA_song-artist').style.display = 'none';
        document.getElementById('JA_song-url').style.display = 'none';
        document.getElementById('JA_song-description').style.display = 'none';
        document.getElementById('JA_song-lyrics').style.display = 'none';
        document.getElementById('JA_song-date').style.display = 'none';
        document.getElementById('JA_spotify-url').style.display = 'none';
        document.getElementById('JA_apple-url').style.display = 'none';
        document.getElementById('JA_donate-url').style.display = 'none';
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

function foldLyrics(lyrics, wordLimit) {
    const words = lyrics.split(' ');
    if (words.length <= wordLimit) {
        return lyrics;
    }
    const visiblePart = words.slice(0, wordLimit).join(' ');
    const hiddenPart = words.slice(wordLimit).join(' ');
    return `
        <span class="visible-lyrics">${visiblePart}</span>
        <span class="more-lyrics" style="display: none;"> ${hiddenPart}</span>
        <a href="javascript:void(0);" class="toggle-lyrics"> ...Show more</a>
    `;
}

function addToggleLyricsListener(prefix = '') {
    const toggleElements = document.querySelectorAll(`#${prefix}song-lyrics .toggle-lyrics`);
    toggleElements.forEach(element => {
        element.addEventListener('click', function() {
            const moreLyrics = this.previousElementSibling;
            if (moreLyrics.style.display === 'none') {
                moreLyrics.style.display = 'inline';
                this.innerText = '   Show less';
            } else {
                moreLyrics.style.display = 'none';
                this.innerText = 'Show more';
            }
        });
    });
}


function JA_addToggleLyricsListener(prefix = '') {
    const toggleElements = document.querySelectorAll(`#${prefix}song-lyrics .toggle-lyrics`);
    toggleElements.forEach(element => {
        element.addEventListener('click', function() {
            const moreLyrics = this.previousElementSibling;
            if (moreLyrics.style.display === 'none') {
                moreLyrics.style.display = 'inline';
                this.innerText = '   Show less';
            } else {
                moreLyrics.style.display = 'none';
                this.innerText = 'Show more';
            }
        });
    });
}

// Fetch the song data initially
fetchSongData();

// Set an interval to fetch the song data every 2 seconds (2000 milliseconds)
setInterval(fetchSongData, 2000);

