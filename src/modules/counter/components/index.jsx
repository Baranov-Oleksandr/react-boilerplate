import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import { createCounterDecrementAction, createCounterIncrementAction } from '../actions';

export function Counter() {
  const value = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(createCounterIncrementAction());
  };

  const handleDecrease = () => {
    dispatch(createCounterDecrementAction());
  };

  return (
    <div>
      <Button
        onClick={handleDecrease}
        color="primary"
        variant="contained"
      >
        Decrement
      </Button>
      <div className="counter__value">
        { value }
      </div>
      <Button
        onClick={handleIncrease}
        color="primary"
        variant="contained"
      >
        Increment
      </Button>
    </div>
  );
}
