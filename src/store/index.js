import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../modules/counter/reducer';
import { todoReducer } from '../modules/todo/reducer';

const combinedReducers = combineReducers({
  counterReducer,
  todoReducer,
});

const logger = () => next => action => {
console.log('action begin');
console.log(JSON.stringify(action, null, 4));
console.log('action end');
next(action);
};

export const asyncActionsMiddleware = () => next => action => {
  console.log(action);
  console.log(typeof action);
  if (typeof action === 'function') {
    action(next);
  } else {
    next(action);
  }
};

const middlewares = [asyncActionsMiddleware, logger];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];

export const store = createStore(
  combinedReducers,
  undefined,
composeWithDevTools(...enhancers),
);
