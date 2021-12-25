import {combineReducers} from 'redux'
import datveReducer from './reducer/datveReducer';
import oantuxiReducer from './reducer/oantuxiReducer.js'

const rootReducer = combineReducers({
    oantuxiReducer,
    datveReducer
})
export default rootReducer;