import { combineReducers } from 'redux'
import projectListReducer from './projeectListReducer'

const rootReducer= combineReducers({
    projectList: projectListReducer
})


export default rootReducer;