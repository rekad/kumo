import { Show, Episode, Host } from "@/lib/types";
export const HOSTS: Host[] = [
    {
        'name': 'Yuko',
        'image': undefined,
    },
    {
        'name': 'Shins-K',
    },
]
export const AIWA_EPISODES: Episode[] = [
    {
        slug: 'setten-aiwa-ep1',
        title: 'Episode 1',
       // image: '/images/shows/setten.jpg',
        description: `2016〜2017年の間にベルリンで開催されていたアラブ・ヒップホップのイベント『AIWA!』の始まりと共同主催者Shins-Kの紹介。2010年〜「アラブの春」を経て開花したアラブ・ヒップホップ、パレスチナ・ディアスポラのアーティストたちとの出会い。

V.A. - “Khat Thaleth” (Stronghold Sound, 2013)
https://strongholdsound.com/

TRAILER : كتيبه 5 تقدم اسلوب في : على الحفة // OSLOOB REPRESENT "KATIBE 5" : ON THE TOP 
https://youtu.be/zF0fSU_9KEs

Aiwa - Beats, Rhymes, and Beyond from the Arab World - vol.1
https://youtu.be/qyparsTck5Y

#AIWA! ##ArabHipHop #StrongholdSound #PalestinianHipHop #LebanieseHipHop #PalestinianDiaspora #Osloob #Katibeh5 #Okydoky #Shins-K #Asifeh #Chyno`,
        mixcloudKey: '/KumoRadio/aiwa-ep1/',
        hosts: HOSTS,
    },
    {
        slug: 'setten-aiwa-ep2',
        title: 'Episode 2 - Ramallah Special',
        // image: '/images/shows/setten.jpg',
        description: `Hosts: Yuko & Shins-K

AIWA! イベント立ち上げのきっかけとなった楽曲紹介。イベントの第2回、パレスチナのアーティスト、Muqata’aとDaknを初めてベルリンに招いた「ラマッラー・スペシャル」回の実現にまつわるエピソード紹介。

Al Sayyed Darwish & El Rass - Ya Deeb (Oh Wolf) السيد درويش والراس - يا ديب
https://youtu.be/5wFYLqwm46s

Faragh, Dakn & Haykal - Lahlak (Prod. by Muqata'a)
https://youtu.be/WZg3sYUDE60

#ElRass #AlDarwish #Muqataa #Dakn #Haykal #Julmud #-1 #Ramallah #AIWA! ##ArabHipHop #PalestinianHipHop #LebaneseHipHop #PalestinianDiaspora #Okydoky #Shins-K #Asifeh`,

        mixcloudKey: '/KumoRadio/aiwa-ep2/',
        hosts: HOSTS,
    },
    {
        slug: 'setten-aiwa-ep3',
        title: 'Episode 3 - Osloob',
        // image: '/images/shows/setten.jpg',
        description: `Hosts: Yuko & Shins-K

2016〜2017年の間にベルリンで開催されていたアラブ・ヒップホップのイベント『AIWA!』の第３回にまつわるエピソードを共同主催者Shins-Kに聞く。出演者のレバノンのパレスチナ難民キャンプ出身のアーティスト、OsloobおよびKatibeh 5とその楽曲、代打出演者Ethinique Punchなどの紹介。

AIWA! Vol.3
https://youtu.be/gTYPgzhlhZU

１曲目
https://soundcloud.com/osloob1/fe-waga3-allayl-2
２曲目
https://soundcloud.com/osloob1/hipflok

Osloob SoundCloud
https://soundcloud.com/osloob1

Katibeh 5
https://www.youtube.com/watch?v=cutB07oTOsE

Musical Novel album.
https://soundcloud.com/osloob1/sets/3al7fa

アラブのトリップホップ、Soap Kills
https://www.youtube.com/watch?v=moq_hFm9QlE

Soap KillsのシンガーYasmin Hamdanの曲のMark先生Remix
https://www.youtube.com/watch?v=UuizXrjVHo0

Soap Killsのプロデューサー Zeid Hamdanの最近のプロジェクトBedoin Burger
https://www.youtube.com/watch?v=0af1ZgdEzbM

#AIWA! ##ArabHipHop #PalestinianHipHop #LebaneseHipHop #SyrianHipHop #PalestinianDiaspora #Osloob #Katibeh5 #MacadiNahhas #Okydoky #Shins-K #Asifeh #JundiMajhul #EthniquPunch #KhyamAllami #YasmineHamdan #SoapKills #ZeidHamdan`,
        mixcloudKey: '/KumoRadio/aiwa-ep03/',
        hosts: HOSTS,
    },
    {
        slug: 'setten-aiwa-ep4',
        title: 'Episode 4 - Damascus Special',
        // image: '/images/shows/setten.jpg',
        description: `Hosts: Yuko & Shins-K

AIWA! 第4回目ダマスカス・スペシャル`,
        mixcloudKey: '/KumoRadio/aiwa-ep-04/',
        hosts: HOSTS,
    }
]

export const SHOWS: Show[] = [
    {
        'name': 'Setten | AIWA!',
        // 'description': '',
        // 'image': '/images/shows/setten.jpg',
        slug: 'setten-aiwa',
        episodes: AIWA_EPISODES,
    }
]
