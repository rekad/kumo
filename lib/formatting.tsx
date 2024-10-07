export function formatUrlsAndLineBreaks(text: string | undefined): string {
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
