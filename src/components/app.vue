<template>
    <main class="app_content">
        <div :class="loader()"></div>
        <TopNav :data="clan" @showMembers="toggleView()" @showStats="toggleView()"></TopNav>
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
    import { transform } from 'util/index'

    const App = {
        name: 'app',

        data()  {
            return {
                clan: { },
                members: true,
                stats: false
            }
        },

        components: { TopNav, Indicators, MemberList, Stats },

        mounted() {
            let domain = window.location.hostname
                , port = window.location.port == '' ? '80' : window.location.port

            fetch(`http://${domain}:${port}/clan`)
                .then(resp => resp.json())
                .then(data => { this.$set(this, 'clan', transform(data)) })
        },

        methods: {
            loader() {
                return this.clan.name == undefined ? 'pageloader is-active' : 'pageloader'
            },

            toggleView() {
                this.$set(this, 'members', !this.members)
                this.$set(this, 'stats', !this.stats)
            }
        }
    }

    export default App
</script>

<style scoped>
    .app_content { margin-top:35px; }
</style>
