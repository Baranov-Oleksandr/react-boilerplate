const API_URL = 'http://e8433f6a.ngrok.io/api/todo';

export const requestTodoItems = () => fetch(`${API_URL}`).then(response => response.json());

