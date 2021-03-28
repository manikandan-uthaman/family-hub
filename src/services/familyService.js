import httpService from './httpFakeService';

async function getFamilyList(familyId) {
  return httpService.get('/family/' + familyId);
}

const familyService = {
  getFamilyList
};

export default familyService;
