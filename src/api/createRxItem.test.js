import createRxItem from './createRxItem';
//import itemToRecord from './utils/itemToRecord';
import data from '../mock-data';
let RxItems = [...data.RxItems];
let newRxItem = {
  fiels: {
    id: '0',
    generic: 'a',
    brand: 'b',
    indications: 'c',
    dosage: 'd',
    sideeffects: 'e'
  }
};

describe('createRxItem', () => {
  it('Calls fetch and create a RxItem', () => {
    fetch.mockResponse(
      JSON.stringify({
        fields: {
          id: newRxItem.id,
          generic: newRxItem.generic,
          brand: newRxItem.brand,
          indications: newRxItem.indications,
          dosage: newRxItem.dosage,
          sideeffects: newRxItem.sideeffects
        }
      })
    );

    return createRxItem({
      newRxItem
    }).then(newRxItem => {
      expect(RxItems).toEqual([...data.RxItems], newRxItem);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
