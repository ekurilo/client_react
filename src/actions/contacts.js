export const fetchContacts = isLoading => ({
  type: 'FETCH_CONTACTS',
  payload: {
    isLoading
  }
});
export const fetchContactsSuccess = contacts => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  payload: {
    contacts,
    isLoading: false
  }
});

export function fetchAllContacts() {
  return dispatch => {
    dispatch(fetchContacts(true));
    return fetch('http://localhost:8090/api/contacts')
      .then(response => response.json())
      .then(json => dispatch(fetchContactsSuccess(json._embedded.contacts)));
  };
}