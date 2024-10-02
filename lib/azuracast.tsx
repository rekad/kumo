export const STATION_IDS = [
    1, // kumoEn
    2, // kumoJp
    3, // waves
]

export type NowPlaying= {
    station: {
        id: number,
        name: string,
        listen_url: string,
    },
    now_playing: {
        song: {
            text: string,
            artist: string,
            title: string,
            lyrics: string,
            custom_fields: {
                date_release: string | null,
                city: string | null,
                spotify_url: string | null,
                apple_podcast_url: string | null,
                soundcloud_url: string | null,
                donate_url: string | null,

            }
        },
        remaining: number,
    }
}

export async function getNowPlayingAllStations() {
    const NOWPLAYING_API_URL = 'https://dashboard.radio4voices.com/api/nowplaying'
    const response = await fetch(NOWPLAYING_API_URL, { cache: 'no-store' })
    const data: NowPlaying[] = await response.json()
    const [kumoEn, kumoJp, waves] = STATION_IDS.map(stationId => data.find(np => np.station.id === stationId))
    return {
        kumoEn,
        kumoJp,
        waves,
    }
}

export async function getNowPlayingSingleStation(stationId: number) {
    const STATION_NOWPLAYING_API_URL = `https://dashboard.radio4voices.com/api/nowplaying/${stationId}`
    const res = await fetch(STATION_NOWPLAYING_API_URL)
    const data: NowPlaying = await res.json()
    return data
}
