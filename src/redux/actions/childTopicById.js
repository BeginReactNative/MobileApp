import {FETCH_CHILD_TOPIC, FETCH_CHILD_TOPIC_FAILURE, FETCH_CHILD_TOPIC_SUCCESS} from './types';

export  function getChildTopicById(params) {
    return {
        type: FETCH_CHILD_TOPIC
    }
};
export function getChildTopicByIdSuccess(data) {
    return {
        type: FETCH_CHILD_TOPIC_SUCCESS,
        data
    }
};
export function getChildTopicByIdFailure() {
    return {
        type: FETCH_CHILD_TOPIC_FAILURE
    }
}

export function fetchChildTopicsById(url) {
    return (dispatch) => {
        dispatch(getChildTopicById())
        fetch(url)
            .then(data => data.json())
            .then(json => {
                dispatch(getChildTopicByIdSuccess(json.data))
            })
             .catch(err => dispatch(getChildTopicByIdFailure(err)))
    }
}