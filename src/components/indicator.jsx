import { h } from 'preact'
import Indicator from 'components/layout/box-indicator'

const regionName = (data) => data.region ? data.region.name : '-'
const members = (data) => data.memberCount ? data.memberCount : '0'
const donations = (data) => data.donations ? data.donations : '0'
const trophies = (data) => data.score ? data.score : '0'

const Indicators = ({ clan }) => (
    <div style="margin: 20px;">
        <br/>
        <div class="columns">
            <Indicator value={members(clan)}>
                Membros
            </Indicator>
            <Indicator value={trophies(clan)}>
                Trof&eacute;us
            </Indicator>
            <Indicator value={donations(clan)}>
                Doa&ccedil;&otilde;es
            </Indicator>
            <Indicator value={regionName(clan)}>
                Regi&atilde;o
            </Indicator>
            
        </div>
    </div>
)

export default Indicators
