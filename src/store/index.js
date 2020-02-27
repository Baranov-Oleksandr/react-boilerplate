import { createStore, combineReducers } from 'redux';
import { counterReducer } from '../modules/counter/reducer';
import { todoReducer } from '../modules/todo/reducer';

const combinedReducers = combineReducers({
  counterReducer,
  todoReducer,
});

export const store = createStore(combinedReducers,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
