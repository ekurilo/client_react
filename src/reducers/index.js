
import { combineReducers } from 'redux';
import ContactsReducer from './contacts'
import ContactReducer from './contact'

const rootReducer = combineReducers({
  contacts: ContactsReducer
});

export default rootReducer;
