import httpService from './httpFakeService';

const tokenKey = 'token';

async function login(username, password) {
  const data = {
    username,
    password,
  };
  const response = await httpService.post('/login', data);
  localStorage.setItem(tokenKey, response.token);
  return response.token;
}

async function register(data) {
  const response = await httpService.post('/register', data);
  localStorage.setItem(tokenKey, response.token);
  return response.token;
}

function getCurrentUser() {
  const token = localStorage.getItem(tokenKey);
  if (!token) return null;

  return {
    username: 'admin@test.com',
    name: 'Admin',
    familyId: 1,
  };
}

function logout() {
  localStorage.removeItem(tokenKey);
}

const auth = {
  login,
  logout,
  register,
  getCurrentUser,
};

export default auth;
