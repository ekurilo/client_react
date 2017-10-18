
import { combineReducers } from 'redux';
import ContactsReducer from './contacts'
import ContactReducer from './contact'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  form: reduxFormReducer
});

export default rootReducer;
