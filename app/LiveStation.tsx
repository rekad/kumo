"use client"

import { useState, useEffect } from "react"
import Description from "./Description"
import { NowPlaying } from "@/lib/azuracast"

function LivePlayer({stationName}: {stationName: string}) {
    return <div className="mt-8">
    <iframe src={`https://dashboard.radio4voices.com/public/${stationName}/embed?theme=dark`} 
        style={{width: '100%', minHeight: '150px', border: 0}}></iframe>
    </div>
}

export default function LiveStation({nowPlaying}:{ nowPlaying: NowPlaying}) {
    const [nowPlayingState, setNowPlayingState] = useState(nowPlaying)

    useEffect(() => {
        const fetchData = async () => {
            // TODO: use getNowPlayingSingleStation function
            const STATION_NOWPLAYING_API_URL = `https://dashboard.radio4voices.com/api/nowplaying/${nowPlayingState.station.id}`
            const res = await fetch(STATION_NOWPLAYING_API_URL)
            const data: NowPlaying = await res.json()
            setNowPlayingState(data)
            // console.log('remaining ', data.now_playing.remaining)
            setTimeout(fetchData, data.now_playing.remaining * 1000)
        }
        setTimeout(fetchData, nowPlayingState.now_playing.remaining * 1000)
    }, [])
    // <h3 className="text-2xl mb-6">{nowPlayingState.station.name}</h3>
    return (
        <div className="container">
            <div className="episode-title">{nowPlayingState.now_playing.song.title}</div>
            <div className="show-name">{nowPlayingState.now_playing.song.artist}</div>
            <LivePlayer stationName={nowPlayingState.station.name} />
            <Description text={nowPlayingState.now_playing.song.lyrics} />
        </div>)
}
