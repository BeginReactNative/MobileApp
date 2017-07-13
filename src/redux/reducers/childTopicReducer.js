import { FETCH_CHILD_TOPIC, FETCH_CHILD_TOPIC_SUCCESS, FETCH_CHILD_TOPIC_FAILURE} from '../actions/types'
const initialState = {
  data: [],
  isFetching: false,
  error: false
}

export default function childTopicById (state = initialState, action) {
  switch (action.type) {
    case FETCH_CHILD_TOPIC:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCH_CHILD_TOPIC_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_CHILD_TOPIC_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}