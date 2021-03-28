import httpService from './httpFakeService';

async function getTodoList(familyId) {
  return httpService.get('/to-do/' + familyId);
}

async function toggleTodoState(id, state) {
  return httpService.post('/to-do/toggle', { id, state });
}

async function reassignTodo(id, assignedTo) {
  return httpService.post('/to-do/re-assign', { id, assignedTo });
}

async function deleteTodo(id) {
  return httpService.httpDelete('/to-do/' + id);
}

async function addItem(data) {
  return httpService.post('/to-do/add', data);
}

const todoService = {
  getTodoList,
  toggleTodoState,
  reassignTodo,
  deleteTodo,
  addItem,
};

export default todoService;
