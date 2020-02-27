import { DECREMENT, INCREMENT } from './constants';

export function createCounterIncrementAction() {
  return {
    type: INCREMENT,
  };
}

export function createCounterDecrementAction() {
  return {
    type: DECREMENT,
  };
}
