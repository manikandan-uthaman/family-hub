// This is to simulate calls to the backend.
// In future, implement any http library and replace this file

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
  sleep(2000);
  if (url.startsWith('/login')) {
    if (data.username === 'admin@test.com' && data.password === 'admin')
      return Promise.resolve({ token: 'auth_token' });
    return Promise.reject(
      generateError(400, 'Username or Password is incorrect')
    );
  }
}

const httpService = { post };

export default httpService;
