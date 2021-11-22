import {combineReducers} from 'redux' 
import displayListReducer from './displaylist/reducer'

const rootReducer = combineReducers({
    displayList : displayListReducer
})

export default rootReducer