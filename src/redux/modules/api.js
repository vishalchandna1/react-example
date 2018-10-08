const POSTS_REQUEST = 'example/1.1/POSTS_REQUEST';
const POSTS_REQUEST_SUCCESS = 'example/1.1/POSTS_REQUEST_SUCCESS';
const POSTS_REQUEST_FAILURE = 'example/1.1/POSTS_REQUEST_FAILURE';

const initialState = {
  list: [],
  isLoading: undefined,
  isLoaded: undefined,
}

export default (state = initialState , action) => {
 switch (action.type) {
  case POSTS_REQUEST:
    return {
      ...state,
      isLoading: true,
      isLoaded: false,
    }
  case POSTS_REQUEST_SUCCESS:
    return {
      ...state,
      list: action.result.data,
      isLoading: false,
      isLoaded: true,
    }
  case POSTS_REQUEST_FAILURE:
    return {
      ...state,
      isLoading: false,
      isLoaded: true,
    }
  default:
   return state
 }
}

export function requestData(data) {
  return {
    types: [POSTS_REQUEST, POSTS_REQUEST_SUCCESS, POSTS_REQUEST_FAILURE],
    api: (axios) => axios.get('https://jsonplaceholder.typicode.com/posts')
  }
}
