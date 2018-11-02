import { SEARCH_CHANGE } from '../types'

const INITIAL_STATE = {
  movie: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SEARCH_CHANGE:
    return {
      ...state,
      movie: action.paylod
    }
  default: return state
  }
}
