// This is to simulate calls to the backend.
// In future, implement any http library and replace this file

var items = [
  { id: 1, name: 'Fruits', purchased: true },
  { id: 2, name: 'Milk Products', purchased: false },
];

function toggleItems(data) {
  items.map((item) => {
    if (item.id === data.id) item.purchased = data.state;
  });
}

function deleteItems(id) {
  const filtered = items.filter((item) => item.id != id);
  items = filtered;
}

function addItems(data) {
  const item = {
    id: items.length + 1,
    name: data.name,
    purchased: false,
  };
  items.push(item);
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
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
  // sleep(2000);
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
}

async function get(url) {
  // sleep(2000);
  if (url.startsWith('/shop-list')) {
    return Promise.resolve({ items: items });
  }
}

async function httpDelete(url) {
  if (url.startsWith('/shop-list')) {
    deleteItems(url.substr(url.lastIndexOf('/') + 1));
    return Promise.resolve({ item: url.lastIndexOf('/') + 1 });
  }
}

const httpService = { post, get, httpDelete };

export default httpService;
