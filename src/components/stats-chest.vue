<template>
    <ul class="box">
        <li v-for="member in list" :key="member.tag">
            <li v-for="member in topChest" :key="member.tag" class="item__chest">
            <div class="media">
                <div class="media-content">
                    <p class="title is-5">{{member.name}}</p>
                    <p class="subtitle is-6">Ba&uacute;s: {{member.clanChestCrowns}}</p>
                </div>
            </div>
        </li>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'stats-chest',

        props: ['list'],

        computed: {
            topChest() {
                if (this.list == undefined) return []
                return this.list.splice(0, 5)
            }
        }
    }
</script>

<style scoped>
    .item__chest { margin-bottom: 10px; }
</style>