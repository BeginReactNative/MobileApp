import { FETCH_COURSE, FETCH_COURSE_SUCCESS, FETCH_COURSE_FAILURE} from '../actions/types'
const initialState = {
  data: [],
  isFetching: false,
  error: false
}

export default function courseById (state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSE:
      return {
        ...state,
        data: [],
        isFetching: true
      }
    case FETCH_COURSE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.data
      }
    case FETCH_COURSE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}