<template>
    <div class="box fadeIn animated" style="margin: 20px;">
        <div class="columns is-multiline">
            <MemberCard v-for="data in list" :key="data.tag" :member="data"></MemberCard>
        </div>
    </div>
</template>

<script>
    import MemberCard from 'components/members/member-card'

    export default {
        name: 'member-list',

        props: [ 'list' ],

        components: { MemberCard }
    }
</script>
