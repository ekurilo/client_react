const contactUrl = 'http://localhost:8090/api/contacts';

export const fetchContacts = () => ({
  type: 'FETCH_CONTACTS',
});
export const fetchContactsSuccess = contacts => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  payload: contacts
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

export const fetchingContact = id => dispatch =>
  dispatch ({
  type: 'FETCHING_CONTACT',
  payload: id
});

export const updateContactSuccess = contact => ({
  type: 'UPDATE_CONTACT_SUCCESS',
  payload: contact
});

export const fetchContactSuccess = contact => ({
  type: 'FETCH_CONTACT_SUCCESS',
  payload: contact
});

export const addContact = (contact) => dispatch => fetch(contactUrl, {
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

export const fetchContact = id => dispatch => {
  dispatch(fetchingContact(id));
  return fetch(`${contactUrl}/${id}`)
    .then(resp => resp.json())
    .then(json => dispatch(fetchContactSuccess(json)))
};

export const updateContact = (id, contact) => dispatch => {
  return fetch(`${contactUrl}/${id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(contact)
  })
    .then(response => response.json())
    .then(json => dispatch(updateContactSuccess(json)))
};

export function fetchAllContacts() {
  return dispatch => {
    dispatch(fetchContacts());
    return fetch(contactUrl)
      .then(response => response.json())
      .then(json => dispatch(fetchContactsSuccess(json._embedded.contacts)));
  };
}