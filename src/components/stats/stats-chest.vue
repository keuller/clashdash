<template>
    <ul class="box">
        <li v-for="(member, idx) in list" 
            v-if="idx < 5" 
            v-bind:key="member.tag" class="item__chest">
            <div class="media">
                <div class="media-content">
                    <p class="title is-5">{{member.name}}</p>
                    <p class="subtitle is-6">Ba&uacute;s: {{member.clanChestCrowns}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'stats-chest',

        props: ['list']
    }
</script>

<style scoped>
    .item__chest { margin-bottom: 10px; }
</style>