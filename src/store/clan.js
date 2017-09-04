'use strict'

import { types, action, dispatch } from 'lib/redux'
import { get, createStream } from 'lib/util'

// action types
const Types = types('CLAN_GET_INFO', 'CLAN_GET_DONE')

// actions
export const clanInfo = action(Types.CLAN_GET_INFO)
const fetchDone = action(Types.CLAN_GET_DONE)

// reducer function
export default function reducer(state, action) {
    switch(action.type) {
        case Types.CLAN_GET_DONE: {
            state.error = action.payload.error || false
            if (state.error) {
                state.data = {}
            } else {
                state.data = action.payload
                state.data.brand = 'http://api.cr-api.com' + action.payload.badge_url
            }
            return {...state}
        }
    }
    return state
}

// side effect functions
export const fetchClanInfo = () => {
    let domain = window.location.hostname
      , port = window.location.port == '' ? '80' : window.location.port
    dispatch(clanInfo(get(`http://${domain}:${port}/clan`).map(clan => fetchDone(clan))))
}
