import { h } from 'preact'
import Router from 'preact-router'
import createHistory from 'history/createHashHistory'
import TopNav from 'components/topnav'
import Indicators from 'components/indicator'
import MemberList from 'components/members'

const loader = (clan) => (clan.data.name == undefined ? 'pageloader is-active' : 'pageloader')

const App = ({ clan }) => (
    <main>
        <div class={loader(clan)}></div>
        <TopNav data={clan.data} />
        <div class="hero">
            <Indicators clan={clan.data} />
            <MemberList clan={clan.data} />
        </div>
    </main>
)

export default App
