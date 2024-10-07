// https://api.mixcloud.com/KumoRadio/aiwa-ep1/
export function MixCloudEmbeddedPlayer({mixcloudKey} : {mixcloudKey: string}) {
    const BASE_URL = 'https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1'
    return (
        <div className="my-4">
        <iframe
            width="100%"
            height="60"
            src={`${BASE_URL}&feed=${mixcloudKey}`}
            frameBorder="0"></iframe>
        </div>
    )
    // return (<iframe width="100%" height="60" src="https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2FKumoRadio%2Faiwa-ep2%2F" frameborder="0" ></iframe>)
}
