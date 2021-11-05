import { all } from '@redux-saga/core/effects';
import giphy_saga from './giphy/saga';

export default function* rootSaga() {
  yield all([
    giphy_saga(),
  ])
}