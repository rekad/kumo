import { SHOWS } from "@/data/episodes";
import { MixCloudEmbeddedPlayer } from "@/lib/mixcloud";
import { formatUrlsAndLineBreaks } from "@/lib/formatting";
import Link from "next/link";

export default function Show({ params }: { params: { slug: string } }) {
    const show = SHOWS.find((show) => show.slug === params.slug);
    if (!show) {
        return <div>Not Found</div>;
    }
    return (
        <main>
            <Link href="/shows">Back to all shows</Link>
            <h1 className="text-2xl">{show.name}</h1>
            <div>{show.description}</div>
            <div>
                {show.episodes.map((episode) => (
                    <div key={episode.slug} className="border border-white p-4 my-4">
                        <h3>{episode.title}</h3>
                        <div>{episode.hosts.reduce((nameList: string[], host) => { return nameList.concat([host.name])}, []).join(',')}</div>
                        <div dangerouslySetInnerHTML={{'__html': formatUrlsAndLineBreaks(episode.description)}}></div>
                        <MixCloudEmbeddedPlayer mixcloudKey={episode.mixcloudKey} />
                    </div>
                ))}
            </div>
        </main>
    );
}
