import {FETCH_CARD, FETCH_CARD_SUCCESS, FETCH_CARD_FAILURE} from './types';

export  function getCardById(params) {
    return {
        type: FETCH_CARD
    }
};
export function getCardByIdSuccess(data) {
    return {
        type: FETCH_CARD_SUCCESS,
        data
    }
};
export function getCardByIdFailure() {
    return {
        type:FETCH_CARD_FAILURE
    }
}

export function fetchCardById(url) {
    return (dispatch) => {
        dispatch(getCardById())
        fetch(url)
            .then(data => data.json())
            .then(json => {
                dispatch(getCardByIdSuccess(json.data))
            })
             .catch(err => dispatch(getCardByIdFailure(err)))
    }
}