import { FETCH_CARD, FETCH_CARD_SUCCESS, FETCH_CARD_FAILURE} from '../actions/types'
const initialState = {
  data: [],
  isFetching: false,
  error: false
}

export default function cardByID (state = initialState, action) {
  switch (action.type) {
    case FETCH_CARD:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCH_CARD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_CARD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}