const API_URL = 'http://90acda65.ngrok.io/api/todo';

export const postTodoItem = todo => {
  fetch(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  })
    .then(response => response.json())
    .then(result => (result));
};

export const requestTodoItems = () => fetch(`${API_URL}`).then(response => response.json());
