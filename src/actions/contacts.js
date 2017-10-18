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


export const addContactSuccess = createdContact => ({
  type: 'ADD_CONTACT_SUCCESS',
  payload: createdContact
});

export const newContact = () => dispatch =>
    dispatch({
    type: 'NEW_CONTACT'
  });

export const removeContactSuccess = href => ({
  type: 'DELETE_CONTACT',
  payload: href
});

export const addContact = (contact) => dispatch => fetch('http://localhost:8090/api/contacts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(response => {
        return response.json();
      })
      .then(json => dispatch(addContactSuccess(json)));

export function deleteContact(href) {
  return dispatch => {
    fetch(href, {method: 'delete'})
      .then(response => dispatch(removeContactSuccess(href)));
  };
}

export function fetchAllContacts() {
  return dispatch => {
    dispatch(fetchContacts(true));
    return fetch('http://localhost:8090/api/contacts')
      .then(response => response.json())
      .then(json => dispatch(fetchContactsSuccess(json._embedded.contacts)));
  };
}