
export default (state = {contactsList: {contacts: [], isLoading: false}}, action) => {
  switch (action.type) {
    case 'FETCH_CONTACTS':
      return {
        ...state, contactsList: {contacts: [], isLoading: action.isLoading}
      };

    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state, contactsList: { contacts: action.contacts, isLoading: false}
      };

    default:
      return state
  }
}
