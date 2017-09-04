<template>
    <div class="column has-text-centered">
        <div class="box indicator">
            <div class="title is-5"><span v-html="label"></span></div>
            <span class="subtitle is-6">{{value}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'box-indicator',

        props: [ 'label', 'value' ]
    }
</script>
