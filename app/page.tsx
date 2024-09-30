import LiveStation from "./LiveStation"

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
                donate_url: string | null,
            }
        },
        remaining: number,
    }
}
const STATION_IDS = [
    1, // kumoEn
    2, // kumoJp
    3, // waves
]

export default async function Home() {
    const NOWPLAYING_API_URL = 'https://dashboard.radio4voices.com/api/nowplaying'
    const response = await fetch(NOWPLAYING_API_URL, { cache: 'no-store' })
    const data: NowPlaying[] = await response.json()
    const [kumoEn, kumoJp, waves] = STATION_IDS.map(stationId => data.find(np => np.station.id === stationId))
    return (
        <main>
            {[kumoEn, waves, kumoJp].map(nowPlaying => nowPlaying ? <LiveStation nowPlaying={nowPlaying} key={nowPlaying.station.id}/> : null)}
        </main>
    );
}
