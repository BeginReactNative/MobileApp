import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './types';

export function getData() {
    return {
        type: FETCHING_DATA
    }
}
export function getDataSuccess(data) {
    return {
        type: FETCHING_DATA_SUCCESS,
        data
    }
}

export function getDataFailure() {
    return {
        type: FETCHING_DATA_FAILURE
    }
}

export function fetchCoursesById(url) {
    return (dispatch) => {
        dispatch(getData())
        fetch(url)
            .then(data => data.json())
            .then(json => {
                dispatch(getDataSuccess(json.data))
            })
             .catch(err => dispatch(getDataFailure(err)))
    }
}