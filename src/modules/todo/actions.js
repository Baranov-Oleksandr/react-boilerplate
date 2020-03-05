import {
  TODO_ADD,
  TODO_ADD_SUCCESS,
  TODO_GET_ITEMS,
  TODO_GET_ITEMS_SUCCESS,
  TODO_UPDATE,
  TODO_REMOVE,
  TODO_SET_FILTER,
} from './constants';
import { postTodoItem, requestTodoItems } from '../../services/api';

function addTodoSuccess(todo) {
  return {
    type: TODO_ADD_SUCCESS,
    payload: todo,
  };
}

export function addTodo(title) {
  const todo = {
    id: Date.now() + Math.random(),
    isCompleted: false,
    title,
  };

  return function (dispatch) {
    dispatch({
      type: TODO_ADD,
    });

    postTodoItem(todo).then(result => {
      dispatch(addTodoSuccess(result));
    });
  };
}

export function getTodoItemSuccess(items) {
  return {
    type: TODO_GET_ITEMS_SUCCESS,
    payload: items,
  };
}

export function getTodoItems() {
  return function (dispatch) {
    dispatch({
      type: TODO_GET_ITEMS,
    });

    requestTodoItems().then(result => {
      dispatch(getTodoItemSuccess(result));
    });
  };
}

export function updateTodo(id, data) {
  return {
    type: TODO_UPDATE,
    payload: {
      id,
      data,
    },
  };
}

export function removeTodo(id) {
  return {
    type: TODO_REMOVE,
    payload: {
      id,
    },
  };
}

export function setFilter(value) {
  return {
    type: TODO_SET_FILTER,
    payload: {
      value,
    },
  };
}
