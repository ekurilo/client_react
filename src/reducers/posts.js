
export default (state = {postsList: {posts: [], isLoading: false}}, action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return {
        ...state, postsList: {posts: [], isLoading: action.isLoading}
      };

    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state, postsList: { posts: action.posts, isLoading: false}
      };

    default:
      return state
  }
}
