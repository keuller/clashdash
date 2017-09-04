<template>
    <div style="margin: 20px;">
        <br/>
        <div class="columns">
            <Indicator label="Membros" :value="members()"></Indicator>
            <Indicator label="Trof&eacute;us" :value="trophies()"></Indicator>
            <Indicator label="Doa&ccedil;&otilde;es" :value="donations()"></Indicator>
            <Indicator label="Regi&atilde;o" :value="regionName()"></Indicator>
        </div>
    </div>
</template>

<script>
import Indicator from 'components/layout/box-indicator'

const Indicators = {
    name: 'indicators',

    props: [ 'clan' ],

    components: { Indicator },

    methods: {
        regionName() { return this.clan.region ? this.clan.region.name : '-' },
        members() { return this.clan.memberCount ? this.clan.memberCount : '0' },
        donations() { return this.clan.donations ? this.clan.donations : '0' },
        trophies() { return this.clan.score ? this.clan.score : '0' }
    }
}

export default Indicators
</script>
