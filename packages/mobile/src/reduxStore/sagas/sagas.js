import {all, fork} from 'redux-saga/effects';
// Imports: Redux Sagas
import {
  watchIncreaseCounter,
  watchDecreaseCounter,
} from '@monorepo/components/src/counter/counter.saga';

// Redux Saga: Root Saga
export default function* rootSaga() {
  yield all([fork(watchIncreaseCounter), fork(watchDecreaseCounter)]);
}
