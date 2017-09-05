<template>
    <ul class="box">
        <li v-for="(val, key) in list" :key="key" class="item__arena">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-48x48">
                        <img :src="val.icon" :alt="key" :title="key"/>
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-5">{{key}}</p>
                    <p class="subtitle is-6">Total: {{val.count}}</p>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'stats-arena',

        props: ['list']
    }
</script>

<style scoped>
    .item__arena { margin-bottom: 10px; }
</style>
