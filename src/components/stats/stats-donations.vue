<template>
    <ul class="box" style="padding:1rem;" v-cloak>
        <li v-for="(member, idx) in list" 
            v-if="idx < 5"
            :key="member.tag" class="item__donation">
            <div class="media item__box">
                <div class="media-left">
                    <div :class="orderBadge(idx)">{{idx + 1}}</div>
                </div>
                <div class="media-content">
                    <img :src="member.arena.imageURL | icon" width="28" class="is-pulled-right" border="0" />
                    <p class="label_item">{{member.name | toUpper}}</p>
                    <p class="sublabel_item">{{member.roleName | toUpper}}</p>
                </div>
                <div class="media-right">
                    <div class="badge">{{member.donations}}</div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'stats-donations',

        props: ['list'],

        methods: {
            orderBadge(idx) {
                switch(idx) {
                    case 0: return ['order_badge', 'gold_badge']
                    case 1: return ['order_badge', 'silver_badge']
                    case 2: return ['order_badge', 'brown_badge']
                    default: return ['order_badge']
                }
            }
        },

        filters: {
            toUpper(value) {
                return value.toUpperCase()
            },

            icon(value) {
                return value.replace('/arena', '/img')
            }
        }
    }
</script>

<style scoped>
    .item__donation { margin-bottom: 2px; }
</style>
