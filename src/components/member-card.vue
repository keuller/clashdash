<template>
    <div class="column is-3">
        <div class="card" style="background-color: #EFEFEF;">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img :src="icon()" alt="icon" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">{{member.name}}</p>
                        <p class="subtitle is-6">{{member.roleName}}</p>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <div class="card-footer-item">
                    Trof&eacute;us: {{member.score}}
                </div>
                <div class="card-footer-item">
                    Doa&ccedil;&otilde;es: {{member.donations}}
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: 'member-card',

    props: [ 'member' ],

    methods: {
        icon() { 
            let icon = this.member.arena.imageURL.replace("/arena", "/img")
            return `${icon}` 
        }
    }
}
</script>
