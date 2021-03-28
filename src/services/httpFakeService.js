// This is to simulate calls to the backend.
// In future, implement any http library and replace this file

var items = [
  { id: 1, name: 'Fruits', purchased: true },
  { id: 2, name: 'Milk Products', purchased: false },
];

var todo = [
  { id: 1, name: 'Clean house', assignedTo: 1, completed: true },
  { id: 2, name: 'Cook food', assignedTo: 2, completed: false },
];

var family = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Eve' },
  { id: 3, name: 'Gary' },
];

function toggleItems(data) {
  items.map((item) => {
    if (item.id === data.id) item.purchased = data.state;
  });
}

function toggleTodo(data) {
  todo.map((item) => {
    if (item.id === data.id) item.completed = data.state;
  });
}

function reassignTodo(data) {
  todo.map((item) => {
    if (item.id === data.id) item.assignedTo = data.assignedTo;
  });
}

function deleteItems(id) {
  const filtered = items.filter((item) => item.id != id);
  items = filtered;
}

function deleteTodo(id) {
  const filtered = todo.filter((item) => item.id != id);
  todo = filtered;
}

function addItems(data) {
  const item = {
    id: items.length + 1,
    name: data.name,
    purchased: false,
  };
  items.push(item);
}

function addTodo(data) {
  const item = {
    id: todo.length + 1,
    name: data.name,
    completed: false,
    assignedTo: data.assignedTo,
  };
  todo.push(item);
}

function generateError(status, message) {
  return {
    response: {
      status: status,
      data: message,
    },
  };
}

async function post(url, data) {
  if (url.startsWith('/login')) {
    if (data.username === 'admin@test.com' && data.password === 'admin')
      return Promise.resolve({ token: 'auth_token' });
    return Promise.reject(
      generateError(400, 'Username or Password is incorrect')
    );
  }
  if (url.startsWith('/register')) {
    return Promise.reject({ token: 'auth_token' });
  }

  if (url.startsWith('/shop-list/add')) {
    addItems(data);
    return Promise.resolve({ items: items });
  }

  if (url.startsWith('/shop-list/toggle')) {
    toggleItems(data);
    return Promise.resolve({ items: items });
  }
  if (url.startsWith('/to-do/toggle')) {
    toggleTodo(data);
    return Promise.resolve({ items: todo });
  }
  if (url.startsWith('/to-do/re-assign')) {
    reassignTodo(data);
    return Promise.resolve({ items: todo });
  }
  if (url.startsWith('/to-do/add')) {
    addTodo(data);
    return Promise.resolve({ items: todo });
  }
}

async function get(url) {
  if (url.startsWith('/shop-list')) {
    return Promise.resolve({ items: items });
  } else if (url.startsWith('/to-do')) {
    return Promise.resolve({ items: todo });
  } else if (url.startsWith('/family')) {
    return Promise.resolve({ items: family });
  }
}

async function httpDelete(url) {
  if (url.startsWith('/shop-list')) {
    deleteItems(url.substr(url.lastIndexOf('/') + 1));
    return Promise.resolve({ item: url.lastIndexOf('/') + 1 });
  } else if (url.startsWith('/to-do')) {
    deleteTodo(url.substr(url.lastIndexOf('/') + 1));
    return Promise.resolve({ item: url.lastIndexOf('/') + 1 });
  }
}

const httpService = { post, get, httpDelete };

export default httpService;
