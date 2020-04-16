// Imports: Dependencies
import {combineReducers} from 'redux';
import counterReducer from '@monorepo/components/src/counter/counter.reducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  counter: counterReducer,
});
// Exports
export default rootReducer;
