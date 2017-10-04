
import { combineReducers } from 'redux';
import PostsReducer from './contacts'

const rootReducer = combineReducers({
  contacts: PostsReducer
});

export default rootReducer;
