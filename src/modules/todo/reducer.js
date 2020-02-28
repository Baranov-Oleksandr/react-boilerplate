import {
  TODO_ADD, TODO_UPDATE, TODO_REMOVE, TODO_SET_FILTER,
} from './constants';

const initialState = {
  filter: '',
  items: [
    { id: Date.now() + Math.random(), isCompleted: false, title: 'Вынести мусор' },
    { id: Date.now() + Math.random(), isCompleted: false, title: 'Попылесосить' },
    { id: Date.now() + Math.random(), isCompleted: false, title: 'Покушать' },
  ],
};

export function todoReducer(state = initialState, { type, payload }) {
  const { items } = state;

  switch (type) {
    case TODO_ADD:
      return {
        ...state,
        items: [
          ...items,
          payload,
        ],
      };

    case TODO_UPDATE: {
      const newItems = items.map(item => {
        if (item.id === payload.id) {
          return {
            ...item,
            ...payload.data,
          };
        }

        return item;
      });

      return {
        ...state,
        items: newItems,
      };
    }

    case TODO_REMOVE: {
      const newItems = items.filter(item => item.id !== payload.id);

      return {
        ...state,
        items: newItems,
      };
    }

    case TODO_SET_FILTER:
      return {
        ...state,
        filter: payload.value,
      };

    default:
      return state;
  }
}
