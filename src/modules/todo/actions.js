import {
  TODO_ADD, TODO_UPDATE, TODO_REMOVE, TODO_SET_FILTER,
} from './constants';

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
