'use client'

import { useState } from "react";
import { formatUrlsAndLineBreaks } from "@/lib/formatting";

export default function Description({text} : {text: string}) {
    if (!text) {
        return null
    }
    const [showingMore, setShowingMore] = useState(false)
    const TEXT_LENGTH_CUTOFF = 400
    let text_to_format
    if (!showingMore && text.length > 400) {
        text_to_format = text.slice(0, 400) + ' ...'
    } else {
        text_to_format = text
    }
    const text_as_html = formatUrlsAndLineBreaks(text_to_format)
    return (
        <div className="description" >
            <div dangerouslySetInnerHTML={{__html: text_as_html}}></div>
            { text.length > 400 ? <button type="button" className="descr-toggle" onClick={() => setShowingMore(!showingMore)}>
                { showingMore ? 'Show less' : 'Show more'}
            </button> : null }
        </div>
    )
}
