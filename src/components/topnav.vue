<template>
    <nav id="topbar" class="navbar topbar_nav">
        <div class="navbar-brand topnav-left">
            <div class="navbar-item">
                <span class="icon"><img :src="data.brand" border="0" /></span> 
                <span>&nbsp;<b>{{data.name}}</b> ({{data.description}})</span>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
                <div class="navbar-item">
                    <a @click.prevent="showMembers()">Membros</a>
                </div>
                <div class="navbar-item">
                    <a @click.prevent="showStats()">Stats</a>
                </div>
            </div>
            <div class="navbar-end">
                <span class="navbar-item">
                    Tag: {{tag}}
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
    const TopNav = {
        name: 'topnav',

        props: [ 'data' ],

        data: () => ({
            tag: '2YQ8UQC'
        }),

        methods: {
            showMembers() {
                this.$emit('showMembers')
            },

            showStats() {
                this.$emit('showStats')
            }
        }
    }

    export default TopNav
</script>
