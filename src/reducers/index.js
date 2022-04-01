import { combineReducers } from 'redux'
import { counterReducers } from './counterReducers'

const rootReducer = combineReducers({
  counters: counterReducers,
})

export default rootReducer
