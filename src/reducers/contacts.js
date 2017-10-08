export default (state = {contacts: [], isLoading: false}, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return Object.assign({}, state, action.payload);

    case 'FETCH_CONTACTS_SUCCESS':
      return Object.assign({}, state, action.payload);

    case 'NEW_CONTACT':
      return {
        ...state,
        isAdded: false
      };

    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
        isAdded: true
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._links.self.href !== action.payload)
      };


    default:
      return state;
  }
};
