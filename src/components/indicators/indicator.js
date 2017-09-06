export default {
    name: 'box-indicator',

    functional: true,

    render: (h, { props, listeners, children }) => {
        return (<div class="column has-text-centered">
            <div class="box indicator">
                <div class="title is-5">{children}</div>
                <span class="subtitle is-6">{props.value}</span>
            </div>
        </div>)
    }
}
