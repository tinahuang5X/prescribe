import rootReducer from './rootReducer';

import data from '../../mock-data';

test('SET_ITEMS', () => {
  let currentState;
  currentState = rootReducer(
    { RxItems: null, selectedItemIds: [], orderItems: [], patientInfo: null },
    {
      type: 'SET_ITEMS',
      RxItems: [...data.RxItems]
    }
  );
  expect(currentState).toEqual({
    RxItems: [...data.RxItems],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null
  });
});

test('ADD_ITEM', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [...data.RxItems],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null
    },
    { type: 'ADD_ITEM', itemId: 'rec1OWru41jzXnOVP' }
  );
  expect(currentState).toEqual({
    RxItems: [...data.RxItems],
    selectedItemIds: [],
    orderItems: [
      {
        id: 'rec1OWru41jzXnOVP',
        generic: 'Levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism',
        dosage: '1 tablet orally daily',
        sideeffects: 'hypersensitivity pneumonitis'
      }
    ],
    patientInfo: null
  });
});

test('SUBMIT_INFO', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [...data.RxItems],
      selectedItemIds: [],
      orderItems: [
        {
          id: 'rec1OWru41jzXnOVP',
          generic: 'Levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism',
          dosage: '1 tablet orally daily',
          sideeffects: 'hypersensitivity pneumonitis'
        }
      ],
      patientInfo: null
    },
    { type: 'SUBMIT_INFO', patientInfo: { name: 'Tina', dob: '03/03/1988' } }
  );
  expect(currentState).toEqual({
    RxItems: [...data.RxItems],
    selectedItemIds: [],
    orderItems: [
      {
        id: 'rec1OWru41jzXnOVP',
        generic: 'Levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism',
        dosage: '1 tablet orally daily',
        sideeffects: 'hypersensitivity pneumonitis'
      }
    ],
    patientInfo: { name: 'Tina', dob: '03/03/1988' }
  });
});

test('DELETE_ITEM', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        ...data.RxItems,
        {
          id: 'recWI4SO25kztAOZc',
          generic: 'a',
          brand: 'b',
          indications: 'c',
          dosage: 'd'
        }
      ],

      selectedItemIds: [],
      orderItems: [],
      patientInfo: null
    },
    { type: 'DELETE_ITEM', itemId: 'recWI4SO25kztAOZc' }
  );
  expect(currentState).toEqual({
    RxItems: [...data.RxItems],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null
  });
});

test('UPDATE_ITEM', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        ...data.RxItems.filter(RxItem => RxItem.id !== 'rec1OWru41jzXnOVP'),
        {
          id: 'rec1OWru41jzXnOVP',
          generic: 'Levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism',
          dosage: '1 tablet orally daily',
          sideeffects: 'hypersensitivity pneumonitis'
        }
      ],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null
    },
    {
      type: 'UPDATE_ITEM',
      itemId: 'rec1OWru41jzXnOVP',
      item: {
        id: 'rec1OWru41jzXnOVP',
        generic: 'Levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism',
        dosage: '20 mg: 1 tablet orally daily'
      }
    }
  );
  expect(currentState).toEqual({
    RxItems: [
      ...data.RxItems.filter(RxItem => RxItem.id !== 'rec1OWru41jzXnOVP'),
      {
        id: 'rec1OWru41jzXnOVP',
        generic: 'Levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism',
        dosage: '20 mg: 1 tablet orally daily'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null
  });
});
