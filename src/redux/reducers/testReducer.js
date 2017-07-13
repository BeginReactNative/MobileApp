import {ADD,SUB} from '../actions/types';

const initialState = {
    number: 10
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD': {
            return {
             number : state.number + 1

            }
        }
        case 'SUB': {
            return {
             number : state.number - 1

            }
        }
        default: return state
    }
}