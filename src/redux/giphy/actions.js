const actionName = 'GIPHY'
const actions = {
  FETCH_LIST_FAILED: `FETCH_FAILED_${actionName}`,
  fetchListFailed: (errorMessage) => ({
    type: actions.FETCH_LIST_FAILED,
    errorMessage,
  }),
  FETCH_LIST: `FETCH_LIST_${actionName}`,
  fetchList: (params) => ({
    type: actions.FETCH_LIST,
    q: params.q,
    loadMore: params.loadMore,
    reset: params.reset,
  }),
  FETCH_LIST_SUCCESS: `FETCH_LIST_SUCCESS_${actionName}`,
  fetchListSuccess: (payload) => ({
    type: actions.FETCH_LIST_SUCCESS,
    result: payload.result,
    q: payload.q,
    notFound: payload.notFound,
  }),
  RESET: `RESET_${actionName}`,
  reset: () => ({
    type: actions.RESET,
  }),
};

export default actions;
