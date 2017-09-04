import { h } from 'preact'
import MemberCard from 'components/member-card'

const MemberList = ({ clan }) => (
    <div class="box" style="margin: 20px;">
        <div class="columns is-multiline">
            {clan.members ? clan.members.map(member => <MemberCard key={member.tag} data={member} />) : null}
        </div>
    </div>
)

export default MemberList
