import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import LinearProgress from '@material-ui/core/LinearProgress';
import {
  addTodo, getTodoItems, updateTodo, removeTodo, setFilter,
} from '../actions';

export const Todo = () => {
  const todoReducer = useSelector(state => state.todoReducer);
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = useState('');
  const { isLoading, filter, items } = todoReducer;
  const trimmedValue = titleValue.trim();
  const filteredItems = items.filter(item => (
    item.title.toLowerCase().indexOf(filter.trim().toLowerCase()) !== -1
  ));

  useEffect(() => {
    dispatch(getTodoItems(titleValue));
  }, []);

  const handleAddTodoItem = () => {
    if (trimmedValue !== '') {
      dispatch(addTodo(titleValue));
      setTitleValue('');
    }
  };

  const handleTodoTitleChange = event => {
    setTitleValue(event.target.value);
  };

  const handleTodoTitleInputKeydown = event => {
    if (event.key === 'Enter') {
      handleAddTodoItem();
    }
  };

  const handleFilterChange = event => {
    dispatch(setFilter(event.target.value));
  };

  if (isLoading) {
    return (
      <div className="todo">
        <LinearProgress className="todo__spinner" />
      </div>
    );
  }

  return (
    <div className="todo">
      <div className="todo__controls">
        <TextField
          className="todo__controls-input"
          label="Please type in task"
          variant="outlined"
          value={titleValue}
          autoFocus
          onChange={handleTodoTitleChange}
          onKeyDown={handleTodoTitleInputKeydown}
        />
        <TextField
          className="todo__controls-input"
          label="Please type in filter"
          variant="outlined"
          value={filter}
          onChange={handleFilterChange}
        />
        <Button
          variant="contained"
          disabled={!trimmedValue}
          color="primary"
          endIcon={<Icon>add</Icon>}
          onClick={handleAddTodoItem}
        >
          Add
        </Button>
      </div>
      <ul>
        { filteredItems.map(({ id, isCompleted, title }) => (
          <li className="todo__item" key={id}>
            <Switch
              value={isCompleted}
              onChange={value => {
                dispatch(updateTodo(id, { isCompleted: value }));
              }}
            />
            { title }
            <IconButton
              onClick={() => { dispatch(removeTodo(id)); }}
            >
              <Icon>delete</Icon>
            </IconButton>
          </li>
        )) }
        { !!trimmedValue && (
          <li className="todo__item todo__item--preview">
            { trimmedValue }
          </li>
        ) }
      </ul>
    </div>
  );
};
