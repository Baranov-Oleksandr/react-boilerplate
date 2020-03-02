import {
  TODO_ADD, TODO_GET_ITEMS, TODO_GET_ITEMS_SUCCESS, TODO_UPDATE, TODO_REMOVE, TODO_SET_FILTER
} from './constants';
import { requestTodoItems } from "../../services/api";

export function addTodo(title) {
  return {
    type: TODO_ADD,
    payload: {
      id: Date.now() + Math.random(),
      isCompleted: false,
      title,
    },
  };
}

export function getTodoItemsSuccess(items) {
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
      dispatch(getTodoItemsSuccess(result));
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
