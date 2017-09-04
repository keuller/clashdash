<template>
    <main>
        <div :class="loader()"></div>
        <TopNav :data="clan" />
        <div class="hero">
            <Indicators :clan="clan" />
            <MemberList :list="clan.members" />
        </div>
    </main>
</template>

<script>
    import TopNav from 'components/topnav'
    import Indicators from 'components/indicator'
    import MemberList from 'components/members'

    const App = {
        name: 'app',

        data: () => ({
            clan: { }
        }),

        components: { TopNav, Indicators, MemberList },

        mounted() {
            let domain = window.location.hostname
                , port = window.location.port == '' ? '80' : window.location.port

            fetch(`http://${domain}:${port}/clan`).then(resp => resp.json())
                .then(data => {
                    this.$set(this, 'clan', {...data, brand: `http://api.cr-api.com${data.badge_url}`}) 
                })
        },

        methods: {
            loader() {
                return this.clan.name == undefined ? 'pageloader is-active' : 'pageloader'
            }
        }
    }

    export default App
</script>
