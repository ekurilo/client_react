
export const addContactSuccess = createdContact => ({
  type: 'ADD_CONTACT_SUCCESS',
  payload: createdContact
});

export const removeContactSuccess = href => ({
  type: 'DELETE_CONTACT',
  payload: href
});

export function addContact(contact) {
  return dispatch => {
    fetch('http://localhost:8090/api/contacts', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contact)
    })
      .then(response => response.json())
      .then(json => dispatch(addContactSuccess(json)))
  }
}

export function deleteContact(href) {
  return dispatch => {
    fetch(href, {method: 'delete'})
      .then(response => dispatch(removeContactSuccess(href)));
  }
}
