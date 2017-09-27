import updateRxItem from './updateRxItem';

let item = {
  id: 'rec1OWru41jzXnOVP',
  generic: 'Levothyroxine',
  brand: 'Synthroid',
  indications: 'treat hypothyroidism',
  dosage: '1 tablet orally daily'
};

let itemId = 'rec1OWru41jzXnOVP';
let newItem = {
  id: 'rec1OWru41jzXnOVP',
  generic: 'Levothyroxine',
  brand: 'Synthroid',
  indications: 'treat hypothyroidism',
  dosage: '20 mg orally daily'
};

describe('updateRxItem', () => {
  it('Calls fetch and update a RxItem', () => {
    fetch.mockResponse(
      JSON.stringify({
        id: item.id,
        fields: {
          generic: item.generic,
          brand: item.brand,
          indications: item.indications,
          dosage: '20 mg orally daily'
        }
      })
    );

    return updateRxItem(itemId, item, {
      dosage: '20 mg orally daily'
    }).then(updatedRxItem => {
      expect(updatedRxItem).toEqual(newItem);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
