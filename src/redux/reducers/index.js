import { combineReducers } from 'redux';
import testReducer from './testReducer';
import dataReducer from './dataReducer';
import courseById from './courseByIdReducer';
const rootReducer = combineReducers({
    testReducer,
    dataReducer,
    courseById
});
export default rootReducer;
