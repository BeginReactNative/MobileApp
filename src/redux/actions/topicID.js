import {FETCH_TOPIC, FETCH_TOPIC_FAILURE, FETCH_TOPIC_SUCCESS} from './types';

export  function getTopicById(params) {
    return {
        type: FETCH_TOPIC
    }
};
export function getTopicByIdSuccess(data) {
    return {
        type: FETCH_TOPIC_SUCCESS,
        data
    }
};
export function getTopicByIdFailure() {
    return {
        type: FETCH_TOPIC_FAILURE
    }
}

export function fetchTopicsById(url) {
    return (dispatch) => {
        dispatch(getTopicById())
        fetch(url)
            .then(data => data.json())
            .then(json => {
                dispatch(getTopicByIdSuccess(json.data))
            })
             .catch(err => dispatch(getTopicByIdFailure(err)))
    }
}
