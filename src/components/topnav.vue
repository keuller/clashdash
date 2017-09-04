<template>
    <nav id="topbar" class="navbar topbar_nav">
        <div class="navbar-brand topnav-left">
            <div class="navbar-item">
                <span class="icon"><img :src="data.brand" border="0" /></span> 
                <span>&nbsp;{{data.name}} ({{data.description}})</span>
            </div>
        </div>
        <div class="navbar-menu">
            <div class="navbar-start">
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
        })
    }

    export default TopNav
</script>