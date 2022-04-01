import {
  COUNTER_REQUEST,
  COUNTER_SUCCESS,
  COUNTER_FAIL,
} from '../constants/counterConstants'

export const increaseCounter = () => {
  return {
    type: COUNTER_SUCCESS,
  }
}
