export const fetchPosts = isLoading => ({type: 'FETCH_POSTS', isLoading});
export const fetchPostSuccess = posts => ({type: 'FETCH_POSTS_SUCCESS', posts});

export function fetchAllPosts() {
  return dispatch => {
    dispatch(fetchPosts(true));
    return fetch('http://localhost:8080/api/posts')
      .then(response => response.json())
      .then(json => dispatch(fetchPostSuccess(json._embedded.posts)));
  };
}