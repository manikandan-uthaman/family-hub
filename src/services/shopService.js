import httpService from './httpFakeService';

async function getShoppingItems(familyId) {
  return httpService.get('/shop-list/' + familyId);
}

async function toggleShoppingState(id, state) {
  return httpService.post('/shop-list/toggle', { id, state });
}

async function addItem(name) {
  return httpService.post('/shop-list/add', { name });
}

async function deleteItem(id) {
  return httpService.httpDelete('/shop-list/' + id);
}

const shopService = {
  getShoppingItems,
  toggleShoppingState,
  addItem,
  deleteItem,
};

export default shopService;
