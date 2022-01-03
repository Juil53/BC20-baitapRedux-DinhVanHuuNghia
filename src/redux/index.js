import {combineReducers} from 'redux'
import datveReducer from './reducer/datveReducer';
import oantuxiReducer from './reducer/oantuxiReducer.js'
import xucxacReducer from './reducer/xucxacReducer';

const rootReducer = combineReducers({
    oantuxiReducer,
    datveReducer,
    xucxacReducer,
})
export default rootReducer;