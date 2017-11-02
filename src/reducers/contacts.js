export default (state = {contacts: [], isLoading: false, contact: {}}, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {
        ...state,
        isLoading: true
      };

    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        contacts: action.payload,
        isLoading: false
      };

    case 'NEW_CONTACT':
      return {
        ...state
      };

    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact._links.self.href !== action.payload)
      };

    case 'FETCHING_CONTACT':
      return {
        ...state,
        isLoading: true,
        contact: {}
      };

    case 'FETCH_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: false,
        contact: action.payload
      };

    case 'UPDATE_CONTACT_SUCCESS':
      const contact = action.payload;
      return {
        ...state,
        contacts: state.contacts.map(item =>
          item._links.self.href === contact._links.self.href ? contact : item)
      };


    default:
      return state;
  }
};
