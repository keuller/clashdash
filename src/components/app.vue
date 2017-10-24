<template>
    <main class="app_content">
        <div v-bind:class="loader()"></div>
        <TopNav v-bind:data="clan" @toggle="toggleView"></TopNav>
        <div class="hero">
            <Indicators :clan="clan" />
            <Members v-show="members" :list="clan.members"></Members>
            <Stats v-show="stats" :arena="clan.arenaStats" :donations="clan.donationStats" :clanChest="clan.clanChestStats"></Stats>
        </div>
    </main>
</template>

<script>
    import TopNav from 'components/topnav'
    import Indicators from 'components/indicators'
    import Members from 'components/members'
    import Stats from 'components/stats'
    import { transform, getUrl } from 'util/index'

    const App = {
        name: 'app',

        data()  {
            return {
                clan: { },
                members: true,
                stats: false
            }
        },

        components: { TopNav, Indicators, Members, Stats },

        mounted() {
            fetch(getUrl())
                .then(resp => resp.json())
                .then(data => { this.$set(this, 'clan', transform(data)) })

            setInterval(() => {
                fetch(getUrl())
                .then(resp => resp.json())
                .then(data => { this.$set(this, 'clan', transform(data)) })
            }, 15000)
        },

        methods: {
            loader() {
                return this.clan.name == undefined ? 'pageloader is-active' : 'pageloader'
            },

            toggleView(type) {
                if (!this.members && type == 'members') {
                    this.$set(this, 'members', true)
                    this.$set(this, 'stats', false)
                } else if (!this.stats && type == 'stats') {
                    this.$set(this, 'members', false)
                    this.$set(this, 'stats', true)
                }
            }
        }
    }

    export default App
</script>

<style scoped>
    .app_content { margin-top:35px; }
</style>
