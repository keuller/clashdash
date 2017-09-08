
export const icon = (url) => url.replace('/arena', '/img')

export const getUrl = () => {
    let domain = window.location.hostname
    , port = window.location.port == '' ? '80' : window.location.port
    return `http://${domain}:${port}/clan`
}

export const transform = (data) => {
    let arena = {}
    let arenaGroup = data.members.reduce((prev, member) => {
        arena = prev[member.arena.arena]
        if (arena == undefined)
            arena = { icon: icon(member.arena.imageURL), count: 1 }
        else
            arena = { icon: icon(member.arena.imageURL), count: arena.count + 1 }
        prev[member.arena.arena] = arena

        return {...prev}
    }, {})

    return donationStats({...data, brand: `http://api.cr-api.com${data.badge_url}`, arenaStats: arenaGroup})
}

const donationStats = (data) => {
    let donationGroup = [...data.members]
    donationGroup.sort((m1, m2) => {
        if (m1.donations > m2.donations) return -1
        if (m2.donations > m1.donations) return 1
        return 0
    })
    
    return clanChestStats({...data, donationStats: donationGroup })
}

const clanChestStats = (data) => {
    let list = [...data.members]
    list.sort((m1, m2) => {
        if (m1.clanChestCrowns > m2.clanChestCrowns) return -1
        if (m2.clanChestCrowns > m1.clanChestCrowns) return 1
        return 0
    })

    return {...data, clanChestStats: list }
}
