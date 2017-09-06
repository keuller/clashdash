<template>
    <ul class="box">
        <li v-for="member in topDonations" :key="member.tag" class="item__donation">
            <div class="media">
                <div class="media-content">
                    <p class="title is-5">{{member.name}}</p>
                    <p class="subtitle is-6">Doa&ccedil;&otilde;es: {{member.donations}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'stats-donations',

        props: ['list'],

        computed: {
            topDonations() {
                if (this.list == undefined) return []
                return this.list.splice(0, 5)
            }
        }
    }
</script>

<style scoped>
    .item__donation { margin-bottom: 10px; }
</style>
