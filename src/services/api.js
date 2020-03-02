const MOCKED_TODO_ITEMS = [
  { id: Date.now() + Math.random(), isCompleted: false, title: 'Вынести мусор' },
  { id: Date.now() + Math.random(), isCompleted: false, title: 'Попылесосить' },
  { id: Date.now() + Math.random(), isCompleted: false, title: 'Покушать' },
];

export const requestTodoItems = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(MOCKED_TODO_ITEMS);
    }, 3000);
  });
};
