import { createStore, combineReducers } from 'lib/redux'
import clan from 'store/clan'

const initialState = { clan:{ error:false, data:{} } }

export default createStore(combineReducers({ clan }), initialState)
