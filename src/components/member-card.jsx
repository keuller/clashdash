import { h } from 'preact'

const baseUrl = 'http://api.cr-api.com'
const icon = (member) => `${baseUrl}/${member.arena.imageURL}`

const MemberCard = ({ data }) => (
    <div class="column is-3">
        <div class="card" style="background-color: #EFEFEF;">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src={icon(data)} alt="Image" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">{data.name}</p>
                        <p class="subtitle is-6">{data.roleName}</p>
                    </div>
                </div>
            </div>
            <footer class="card-footer">
                <div class="card-footer-item">
                    Trof&eacute;us: {data.score}
                </div>
                <div class="card-footer-item">
                    Doa&ccedil;&otilde;es: {data.donations}
                </div>
            </footer>
        </div>
    </div>
)

export default MemberCard
