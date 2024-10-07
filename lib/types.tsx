export type Show = {
    // id: number
    slug: string
    name: string
    description?: string
    image?: string
    episodes: Episode[]
}

export type Episode = {
    slug: string
    title: string
    image?: string
    description?: string
    mixcloudKey: string
    hosts: Host[]
}

export type Host = {
    name: string
    image?: string
    description?: string
}
