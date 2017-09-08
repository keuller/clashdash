<template>
    <nav id="topbar" class="navbar navbar-fixed topbar_nav">
        <div class="navbar-brand topnav-left">
            <div class="navbar-item">
                <span class="icon"><img :src="data.brand" border="0" /></span> 
                <span>&nbsp;
                    <b>{{data.name}}</b> <span class="is-hidden-mobile">({{data.description}})</span>
                </span>
            </div>

            <div v-bind:class="mobileBurguer" v-on:click="toggleMenu" data-target="mobiMenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="mobiMenu" v-bind:class="mobileMenuClass">
            <div class="navbar-start">
                <div class="navbar-item">
                    <a @click.prevent="showMembers()">Membros</a>
                </div>
                <div class="navbar-item">
                    <a @click.prevent="showStats()">Stats</a>
                </div>
            </div>
            <div class="navbar-end">
                <span class="navbar-item is-hidden-mobile">
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
            return { 
                tag: '2YQ8UQC',
                mobileMenu: false,
                mobileBurguer: ['navbar-burger', 'burger'],
                mobileMenuClass: ['navbar-menu']
            }
        },

        methods: {
            showMembers() {
                this.$emit('showMembers')
            },

            showStats() {
                this.$emit('showStats')
            },

            toggleMenu() {
                this.mobileBurguer = this.mobileMenu ? ['navbar-burger', 'burger'] : ['navbar-burger', 'burger', 'is-active']
                this.mobileMenuClass = this.mobileMenu ? ['navbar-menu'] : ['navbar-menu', 'is-active']
                this.mobileMenu = !this.mobileMenu
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
