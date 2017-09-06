<template>
    <div style="margin: 20px;">
        <br/>
        <div class="columns">
            <Indicator :value="members()">Membros</Indicator>
            <Indicator :value="trophies()">Trof&eacute;us</Indicator>
            <Indicator :value="donations()">Doa&ccedil;&otilde;es</Indicator>
            <Indicator :value="regionName()">Regi&atilde;o</Indicator>
        </div>
    </div>
</template>

<script>
import Indicator from 'components/indicators/indicator'

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
