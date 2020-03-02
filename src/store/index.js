import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { counterReducer } from '../modules/counter/reducer';
import { todoReducer } from '../modules/todo/reducer';

const combinedReducers = combineReducers({
  counterReducer,
  todoReducer,
});

const logger = () => next => action => {
  next(action);
};

export const asyncActionsMiddleware = () => next => action => {
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
