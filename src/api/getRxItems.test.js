import getRxItems from './getRxItems';
//import itemToRecord from './utils/itemToRecord';
import data from '../mock-data';

describe('getRxItems', () => {
  it('Calls fetch and returns RxItems', () => {
    fetch.mockResponse(
      JSON.stringify({
        records: data.RxItems.map(item => {
          const record = { fields: {} };
          if (item.id) record.id = item.id;
          if (item.generic) record.fields.generic = item.generic;
          if (item.brand) record.fields.brand = item.brand;
          if (item.indications) record.fields.indications = item.indications;
          if (item.dosage) record.fields.dosage = item.dosage;
          if (item.sideeffects) record.fields.sideeffects = item.sideeffects;

          return record;
        })
      })
    );

    return getRxItems({
      AIRTABLE_DATABASE_ID: 'SOME_DATABASE_ID',
      AIRTABLE_TOKEN: 'SOME_TOKEN'
    }).then(RxItems => {
      expect(RxItems).toEqual([...data.RxItems]);
    });
  });

  afterAll(() => {
    fetch.mockReset();
  });
});
