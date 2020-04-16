import { createStore, applyMiddleware } from "redux";

import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducers";
import rootSaga from "../sagas";

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Redux: Store
export const initializeStore = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);
// Exports

export default initializeStore;
