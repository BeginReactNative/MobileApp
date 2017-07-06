import {FETCH_COURSE, FETCH_COURSE_FAILURE, FETCH_COURSE_SUCCESS} from './types';

export  function getCourseById() {
    return {
        type: FETCH_COURSE
    }
};
export function getCourseByIdSuccess(data) {
    return {
        type: FETCH_COURSE_SUCCESS,
        data
    }
};
export function getCourseByIdFailure() {
    return {
        type: FETCH_COURSE_FAILURE
    }
}

export function fetchCourseById(url) {
    return (dispatch) => {
        dispatch(getCourseById())
        fetch(url)
            .then(data => data.json())
            .then(json => {
                dispatch(getCourseByIdSuccess(json.data))
            })
             .catch(err => dispatch(getCourseByIdFailure(err)))
    }
}