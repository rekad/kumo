import LiveStation from "./LiveStation"
import { getNowPlayingAllStations } from "@/lib/azuracast"


export default async function Home() {
    const {kumoJp, waves} = await getNowPlayingAllStations()
    return (
        <main>
            {[kumoJp, waves].map(nowPlaying => nowPlaying ? <LiveStation nowPlaying={nowPlaying} key={nowPlaying.station.id}/> : null)}
        </main>
    );
}
