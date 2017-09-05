<template>
    <main>
        <div :class="loader()"></div>
        <TopNav :data="clan" @showMembers="onShowMembers()" @showStats="onShowStats()"></TopNav>
        <div class="hero">
            <Indicators :clan="clan" />
            <MemberList v-show="members" :list="clan.members" />
            <Stats v-show="stats" :arena="clan.arenaStats" :donations="clan.donationStats" :clanChest="clan.clanChestStats"></Stats>
        </div>
    </main>
</template>

<script>
    import TopNav from 'components/topnav'
    import Indicators from 'components/indicator'
    import MemberList from 'components/members'
    import Stats from 'components/stats'

    const icon = (url) => url.replace('/arena', '/img')

    const arenaStats = (data) => {
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

    const App = {
        name: 'app',

        data: () => ({
            clan: { },
            members: true,
            stats: false
        }),

        components: { TopNav, Indicators, MemberList, Stats },

        mounted() {
            let domain = window.location.hostname
                , port = window.location.port == '' ? '80' : window.location.port

            fetch(`http://${domain}:${port}/clan`).then(resp => resp.json())
                .then(data => {
                    this.$set(this, 'clan', arenaStats(data)) 
                })
        },

        methods: {
            loader() {
                return this.clan.name == undefined ? 'pageloader is-active' : 'pageloader'
            },

            onShowMembers() {
                this.$set(this, 'members', true)
                this.$set(this, 'stats', false)
            },

            onShowStats() {
                this.$set(this, 'members', false)
                this.$set(this, 'stats', true)
            }
        }
    }

    export default App
</script>
