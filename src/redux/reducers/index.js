import { combineReducers } from 'redux';
import testReducer from './testReducer';
import dataReducer from './dataReducer';
import courseById from './courseByIdReducer';
import topicById from './topicReducer';
import childTopicById from './childTopicReducer';
const rootReducer = combineReducers({
    testReducer,
    dataReducer,
    courseById,
    topicById,
    childTopicById
});
export default rootReducer;
