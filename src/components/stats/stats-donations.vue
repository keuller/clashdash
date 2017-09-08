<template>
    <ul class="box" v-cloak>
        <li v-for="(member, idx) in list" 
            v-if="idx < 5"
            :key="member.tag" class="item__donation">
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

        props: ['list']
    }
</script>

<style scoped>
    .item__donation { margin-bottom: 10px; }
</style>
