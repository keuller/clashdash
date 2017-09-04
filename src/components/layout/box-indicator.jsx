import { h } from 'preact'

const BoxIndicator = (props) => (
    <div class="column has-text-centered">
        <div class="box indicator">
            <div class="title is-5">{props.children}</div>
            <span class="subtitle is-5">{props.value}</span>
        </div>
    </div>
)

export default BoxIndicator
