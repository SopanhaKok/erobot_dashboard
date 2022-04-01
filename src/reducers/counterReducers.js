import {
  COUNTER_REQUEST,
  COUNTER_SUCCESS,
  COUNTER_FAIL,
} from '../constants/counterConstants'

export const counterReducers = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case COUNTER_REQUEST:
      return {
        loading: true,
      }
    case COUNTER_SUCCESS:
      return {
        loading: false,
        counter: state.counter + 1,
      }
    case COUNTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}
