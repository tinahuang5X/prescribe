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

test('SELECT_ITEM', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [...data.RxItems],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null
    },
    { type: 'SELECT_ITEM', itemId: 'rec1OWru41jzXnOVP' }
  );
  expect(currentState).toEqual({
    RxItems: [...data.RxItems],
    selectedItemIds: ['rec1OWru41jzXnOVP'],
    orderItems: [],
    patientInfo: null
  });
});

test('DESELECT_ITEM', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [...data.RxItems],
      selectedItemIds: ['rec1OWru41jzXnOVP'],
      orderItems: [],
      patientInfo: null
    },
    { type: 'DESELECT_ITEM', itemId: 'rec1OWru41jzXnOVP' }
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

test('SUBMIT_RXINFO', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [...data.RxItems],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null
    },
    {
      type: 'SUBMIT_RXINFO',
      addedItem: {
        id: 'recIX579ZPoBhi4Ny',
        generic: 'A',
        brand: 'B',
        indications: 'C',
        dosage: 'D'
      }
    }
  );
  expect(currentState).toEqual({
    RxItems: [
      ...data.RxItems,
      {
        id: 'recIX579ZPoBhi4Ny',
        generic: 'A',
        brand: 'B',
        indications: 'C',
        dosage: 'D'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
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

test('TRANSMIT_ORDER', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [...data.RxItems],
      selectedItemIds: [],
      orderItems: [
        {
          id: 'recXIgibmyjKC4NDo',
          generic: 'Glucophage',
          brand: 'Glucophage',
          indications: 'treat type 2 diabetes',
          dosage: '500 mg: 1 tablet orally twice a day',
          sideeffects: 'abdominal discomfort'
        }
      ],
      patientInfo: { name: 'Lisa', dob: '03/03/1988' }
    },
    {
      type: 'TRANSMIT_ORDER',
      patientInfo: null,
      orderItems: [],
      selectedItemIds: []
    }
  );
  expect(currentState).toEqual({
    RxItems: [...data.RxItems],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null
  });
});
