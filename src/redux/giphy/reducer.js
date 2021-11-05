import actions from './actions';

const initState = {
  result: [],
  q: undefined,
  loading: false,
  error: false,
  errorMessage: null,
  notFound: false,
};

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.FETCH_LIST:
      return {
        ...state,
        loading: true,
      };
    case actions.FETCH_LIST_SUCCESS:
      return {
        ...state,
        q: action.q,
        result: action.result,
        loading: false,
        notFound: action.notFound,
      };
    case actions.FETCH_LIST_FAILED:
      return {
        ...state,
        error: true,
        errorMessage: action.errorMessage,
        loading: false,
      };
    case actions.RESET:
      return initState;
    default:
      return state;
  }
}
