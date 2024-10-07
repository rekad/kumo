import Link from "next/link";
import { SHOWS } from "@/data/episodes";

export default function Shows() {
    return (
        <main>
            <h1 className="text-2xl">Shows</h1>
            <div>
                {SHOWS.map((show) => (
                    <Link key={show.slug} href={`/shows/${show.slug}`}>
                    <div key={show.slug} className="border border-white p-4">
                        <h2>{show.name}</h2>
                        <div>Hosts: {show.episodes.reduce((hostsList: string[], episode) => {
                            episode.hosts.forEach((host) => {
                                if (!hostsList.includes(host.name)) {
                                    hostsList.push(host.name);
                                }
                            });
                            return hostsList;
                        }, []).join(', ')}</div>
                        <div>{show.episodes.length} Episodes</div>
                    </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}
