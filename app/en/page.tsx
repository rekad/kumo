import LiveStation from "../LiveStation"
import { getNowPlayingAllStations } from "@/lib/azuracast"

export default async function HomeEn() {
    const {kumoEn, waves} = await getNowPlayingAllStations()
    return (
        <main>
            {[kumoEn, waves].map(nowPlaying => nowPlaying ? <LiveStation nowPlaying={nowPlaying} key={nowPlaying.station.id}/> : null)}
        </main>
    );
}
