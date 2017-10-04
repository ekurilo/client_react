export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_CONTACT_SUCCESS':
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}
