"use client"

import { useState, useEffect } from "react"
import Description from "./Description"
import { NowPlaying } from "@/lib/azuracast"

function LivePlayer({ stationName }: { stationName: string }) {
    return <div className="mt-8">
        <iframe src={`https://dashboard.radio4voices.com/public/${stationName}/embed?theme=dark`}
            style={{ width: '100%', minHeight: '150px', border: 0 }}></iframe>
    </div>
}

function LocationDate({ location, date }: { location: string | null, date: string | null }) {
    if (!location && !date) {
        return null
    }
    return <div>{[location, date].filter(el => !!el).join(', ')}</div>
}

function Links({ spotify, apple, soundcloud, donate }: { spotify: string | null, apple: string | null, soundcloud: string | null, donate: string | null }) {
    return (<div className="flex flex-col">
        <p>Links:</p>
        {
            [
                ['Spotify', spotify],
                ['Apple', apple],
                ['Soundcloud', soundcloud],
                ['Donation', donate],
            ].map(pair => pair[0] && pair[1] ? <a key={pair[0]} href={pair[1]}>{pair[0]}</a> : null)
        }
    </div>)
}

export default function LiveStation({ nowPlaying }: { nowPlaying: NowPlaying }) {
    const [nowPlayingState, setNowPlayingState] = useState(nowPlaying)
    const { now_playing: { song }, station } = nowPlayingState;

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
            <div className="episode-title">{song.title}</div>
            <div className="show-name">{song.artist}</div>
            <LocationDate location={song.custom_fields.city} date={song.custom_fields.date_release} />
            <LivePlayer stationName={station.name} />
            <Description text={song.lyrics} />
            <Links spotify={song.custom_fields.spotify_url} apple={song.custom_fields.apple_podcast_url} soundcloud={song.custom_fields.soundcloud_url} donate={song.custom_fields.donate_url} />
        </div>)
}
