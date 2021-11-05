import { nanoid } from 'nanoid';
import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import giphyApi from '../../api/giphy';
import { store } from '../store';

function* fetchGiphyList({ q, loadMore = false, reset = false }) {
  try {
    const giphyState = store.getState().giphy;
    const reqParams = {
      offset: loadMore ? giphyState.result.length : 0,
      q: reset ? undefined : (q || giphyState.q),
    }
    const giphyResult = yield call(giphyApi.list, reqParams);
    const mappedNewResult = giphyResult.data.data.map(el => ({
      ...el,
      nanoId: nanoid(),
    }))
    const successPayload = {
      result: loadMore ? [...giphyState.result, ...mappedNewResult] : mappedNewResult,
      q: reqParams.q,
    }
    if (mappedNewResult.length === 0 && !loadMore) successPayload.notFound = true;
    yield put(
      actions.fetchListSuccess(successPayload),
    );
  } catch (error) {
    const errorMessage = error.message ? error.message : JSON.stringify(error);
    yield put(actions.fetchListFailed(errorMessage));
  }
}

export default function* rootSaga() {
  yield takeLatest(actions.FETCH_LIST, fetchGiphyList);
}
