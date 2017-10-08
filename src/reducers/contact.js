export default (state = {newContact: {}}, action) => {
  switch (action.type) {
    case 'NEW_CONTACT':
      return {
        ...state,
        isSuccess: false
      };
    default:
      return state;
  }
}
