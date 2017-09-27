import deleteRxItem from './deleteRxItem';
//import itemToRecord from './utils/itemToRecord';

let toBeDeletedRxItem = {
  fiels: {
    id: '0',
    generic: 'a',
    brand: 'b',
    indications: 'c',
    dosage: 'd',
    sideeffects: 'e'
  }
};

let mockDataResponse = {
  deleted: true,
  id: toBeDeletedRxItem.id
};

//let RxItems = [...data.RxItems].concat[toBeDeletedRxItem];
describe('deleteRxItem', () => {
  fetch.mockResponse(JSON.stringify(mockDataResponse));
  it('Calls fetch and delete a RxItem', () => {
    return deleteRxItem(toBeDeletedRxItem).then(toBeDeletedRxItem => {
      expect(toBeDeletedRxItem).toEqual(mockDataResponse);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
