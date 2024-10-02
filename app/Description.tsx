'use client'

import { useState } from "react";

function formatUrlsAndLineBreaks(text: string): string {
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
