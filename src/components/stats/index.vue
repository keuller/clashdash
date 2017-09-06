<template>
    <div class="box fadeIn animated" style="margin: 20px">
        <h4 class="title is-4">Estat&iacute;sticas</h4>
        <div class="columns">
            <div class="column is-4">
                <h4 class="subtitle is-5 has-text-centered">Membros Por Arena</h4>
                <StatsArena :list="arena"></StatsArena>
            </div>
            <div class="column is-4">
                <h4 class="subtitle is-5 has-text-centered">Top 5 Doadores</h4>
                <StatsDonations :list="donations"></StatsDonations>
            </div>
            <div class="column is-4">
                <h4 class="subtitle is-5 has-text-centered">Top 5 Ba&uacute; do Clan</h4>
                <StatsChest :list="clanChest"></StatsChest>
            </div>
        </div>
    </div>
</template>

<script>
    import StatsArena from 'components/stats/stats-arena'
    import StatsDonations from 'components/stats/stats-donations'
    import StatsChest from 'components/stats/stats-chest'

    export default {
        name: 'stats',

        props: ['arena', 'clanChest', 'donations'],

        components: { StatsArena, StatsDonations, StatsChest }
    }
</script>
