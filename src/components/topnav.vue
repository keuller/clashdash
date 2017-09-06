<template>
    <nav id="topbar" class="navbar navbar-fixed topbar_nav">
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
                    Clan Tag:&nbsp;<b>{{tag}}</b>
                </span>
            </div>
        </div>
    </nav>
</template>

<script>
    const TopNav = {
        name: 'topnav',

        props: ['data'],

        data() {
            return { tag: '2YQ8UQC' }
        },

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

<style scoped>
    .navbar-fixed { 
        top:0; z-index:250; position:fixed; width:100%; 
        -webkit-box-shadow: 0px 1px 3px 0px rgba(64,59,64,1);
        -moz-box-shadow: 0px 1px 3px 0px rgba(64,59,64,1);
        box-shadow: 0px 1px 3px 0px rgba(64,59,64,1);
    } 
</style>
