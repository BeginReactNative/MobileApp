import { combineReducers } from 'redux';
import testReducer from './testReducer';
import dataReducer from './dataReducer';
import courseById from './courseByIdReducer';
import topicById from './topicReducer';
import childTopicById from './childTopicReducer';
import cardById from './cardReducer';
const rootReducer = combineReducers({
    testReducer,
    dataReducer,
    courseById,
    topicById,
    childTopicById,
    cardById
});
export default rootReducer;
