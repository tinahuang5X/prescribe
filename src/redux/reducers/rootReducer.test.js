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

test('SET_PATIENTS', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        {
          id: 11,
          doctorId: 1,
          generic: 'acetominophen',
          brand: 'Tylenol',
          indications: 'allergy'
        },
        {
          id: 12,
          doctorId: 1,
          generic: 'abc',
          brand: 'def',
          indications: 'ghi'
        },
        {
          id: 1,
          doctorId: 1,
          generic: 'atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol'
        },
        {
          id: 2,
          doctorId: 1,
          generic: 'levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism'
        },
        {
          id: 3,
          doctorId: 1,
          generic: 'metformin',
          brand: 'Glucophage',
          indications: 'treat type 2 diabetes'
        },
        {
          id: 4,
          doctorId: 1,
          generic: 'omeprazole',
          brand: 'Prilosec',
          indications: 'treat gastroesophageal reflux disease '
        },
        {
          id: 13,
          doctorId: 1,
          generic: 'ham',
          brand: 'cheese',
          indications: 'milk'
        },
        {
          id: 5,
          doctorId: 1,
          generic: 'azithromycinn',
          brand: 'Zithromax',
          indications: 'treat infections caused by bacteria'
        }
      ],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null,
      doctorInfo: [
        null,
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
        }
      ],
      doctors: [],
      patients: [],
      rxInfo: null
    },
    {
      type: 'SET_PATIENTS',
      patients: [
        {
          id: 2,
          doctorId: 1,
          name: 'Taylor Swift',
          dob: '12/13/1989',
          phone: '415-888-4438',
          address: '80 Heaven Rd. Miami, FL 39555'
        },
        {
          id: 3,
          doctorId: 1,
          name: 'Justin Bieber',
          dob: '3/1/1994',
          phone: '510-333-4455',
          address: '100 Hollywood Dr. LA, CA 93103'
        },
        {
          id: 4,
          doctorId: 1,
          name: 'Emma Stone',
          dob: '11/6/1988',
          phone: '925-222-4444',
          address: '48 La La Lane, LA, CA 93105'
        },
        {
          id: 6,
          doctorId: 1,
          name: 'Kim Kardashian',
          dob: '10/21/1980',
          phone: '123-456-7899',
          address: '804 3rd St., San Rafael, CA 94901'
        },
        {
          id: 8,
          doctorId: 1,
          name: 'Katie Kardashian',
          dob: '10/21/1980',
          phone: '510-456-7890',
          address: '804 4th St., San Rafael, CA 94901'
        },
        {
          id: 1,
          doctorId: 1,
          name: 'Lisa Chang',
          dob: '12/10/1987',
          phone: '415-123-4567',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 12,
          doctorId: 1,
          name: 'Eric',
          dob: '4/12/1969',
          phone: '415-222-4444',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 13,
          doctorId: 1,
          name: 'Myer',
          dob: '3/3/1987',
          phone: '4153333367',
          address: '123 San Rafael Rd.'
        }
      ]
    }
  );
  expect(currentState).toEqual({
    RxItems: [
      {
        id: 11,
        doctorId: 1,
        generic: 'acetominophen',
        brand: 'Tylenol',
        indications: 'allergy'
      },
      { id: 12, doctorId: 1, generic: 'abc', brand: 'def', indications: 'ghi' },
      {
        id: 1,
        doctorId: 1,
        generic: 'atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol'
      },
      {
        id: 2,
        doctorId: 1,
        generic: 'levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism'
      },
      {
        id: 3,
        doctorId: 1,
        generic: 'metformin',
        brand: 'Glucophage',
        indications: 'treat type 2 diabetes'
      },
      {
        id: 4,
        doctorId: 1,
        generic: 'omeprazole',
        brand: 'Prilosec',
        indications: 'treat gastroesophageal reflux disease '
      },
      {
        id: 13,
        doctorId: 1,
        generic: 'ham',
        brand: 'cheese',
        indications: 'milk'
      },
      {
        id: 5,
        doctorId: 1,
        generic: 'azithromycinn',
        brand: 'Zithromax',
        indications: 'treat infections caused by bacteria'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
      }
    ],
    doctors: [],
    patients: [
      {
        id: 2,
        doctorId: 1,
        name: 'Taylor Swift',
        dob: '12/13/1989',
        phone: '415-888-4438',
        address: '80 Heaven Rd. Miami, FL 39555'
      },
      {
        id: 3,
        doctorId: 1,
        name: 'Justin Bieber',
        dob: '3/1/1994',
        phone: '510-333-4455',
        address: '100 Hollywood Dr. LA, CA 93103'
      },
      {
        id: 4,
        doctorId: 1,
        name: 'Emma Stone',
        dob: '11/6/1988',
        phone: '925-222-4444',
        address: '48 La La Lane, LA, CA 93105'
      },
      {
        id: 6,
        doctorId: 1,
        name: 'Kim Kardashian',
        dob: '10/21/1980',
        phone: '123-456-7899',
        address: '804 3rd St., San Rafael, CA 94901'
      },
      {
        id: 8,
        doctorId: 1,
        name: 'Katie Kardashian',
        dob: '10/21/1980',
        phone: '510-456-7890',
        address: '804 4th St., San Rafael, CA 94901'
      },
      {
        id: 1,
        doctorId: 1,
        name: 'Lisa Chang',
        dob: '12/10/1987',
        phone: '415-123-4567',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 12,
        doctorId: 1,
        name: 'Eric',
        dob: '4/12/1969',
        phone: '415-222-4444',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 13,
        doctorId: 1,
        name: 'Myer',
        dob: '3/3/1987',
        phone: '4153333367',
        address: '123 San Rafael Rd.'
      }
    ],
    rxInfo: null
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
test('UPDATE_PATIENT', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        {
          id: 11,
          doctorId: 1,
          generic: 'acetominophen',
          brand: 'Tylenol',
          indications: 'allergy'
        },
        {
          id: 12,
          doctorId: 1,
          generic: 'abc',
          brand: 'def',
          indications: 'ghi'
        },
        {
          id: 1,
          doctorId: 1,
          generic: 'atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol'
        },
        {
          id: 2,
          doctorId: 1,
          generic: 'levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism'
        },
        {
          id: 3,
          doctorId: 1,
          generic: 'metformin',
          brand: 'Glucophage',
          indications: 'treat type 2 diabetes'
        },
        {
          id: 4,
          doctorId: 1,
          generic: 'omeprazole',
          brand: 'Prilosec',
          indications: 'treat gastroesophageal reflux disease '
        },
        {
          id: 13,
          doctorId: 1,
          generic: 'ham',
          brand: 'cheese',
          indications: 'milk'
        },
        {
          id: 5,
          doctorId: 1,
          generic: 'azithromycinn',
          brand: 'Zithromax',
          indications: 'treat infections caused by bacteria'
        }
      ],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null,
      doctorInfo: [
        null,
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
        }
      ],
      doctors: [],
      patients: [
        {
          id: 2,
          doctorId: 1,
          name: 'Taylor Swift',
          dob: '12/13/1989',
          phone: '415-888-4438',
          address: '80 Heaven Rd. Miami, FL 39555'
        },
        {
          id: 3,
          doctorId: 1,
          name: 'Justin Bieber',
          dob: '3/1/1994',
          phone: '510-333-4455',
          address: '100 Hollywood Dr. LA, CA 93103'
        },
        {
          id: 4,
          doctorId: 1,
          name: 'Emma Stone',
          dob: '11/6/1988',
          phone: '925-222-4444',
          address: '48 La La Lane, LA, CA 93105'
        },
        {
          id: 6,
          doctorId: 1,
          name: 'Kim Kardashian',
          dob: '10/21/1980',
          phone: '123-456-7899',
          address: '804 3rd St., San Rafael, CA 94901'
        },
        {
          id: 8,
          doctorId: 1,
          name: 'Katie Kardashian',
          dob: '10/21/1980',
          phone: '510-456-7890',
          address: '804 4th St., San Rafael, CA 94901'
        },
        {
          id: 1,
          doctorId: 1,
          name: 'Lisa Chang',
          dob: '12/10/1987',
          phone: '415-123-4567',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 12,
          doctorId: 1,
          name: 'Eric',
          dob: '4/12/1969',
          phone: '415-222-4444',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 13,
          doctorId: 1,
          name: 'Myer',
          dob: '3/3/1987',
          phone: '4153333367',
          address: '123 San Rafael Rd.'
        }
      ],
      rxInfo: null
    },
    {
      type: 'UPDATE_PATIENT',
      patientId: 13,
      patient: {
        id: 13,
        doctorId: null,
        name: 'Justin',
        dob: '3/3/1987',
        phone: '4153333367',
        address: '123 San Rafael Rd.'
      }
    }
  );
  expect(currentState).toEqual({
    RxItems: [
      {
        id: 11,
        doctorId: 1,
        generic: 'acetominophen',
        brand: 'Tylenol',
        indications: 'allergy'
      },
      { id: 12, doctorId: 1, generic: 'abc', brand: 'def', indications: 'ghi' },
      {
        id: 1,
        doctorId: 1,
        generic: 'atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol'
      },
      {
        id: 2,
        doctorId: 1,
        generic: 'levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism'
      },
      {
        id: 3,
        doctorId: 1,
        generic: 'metformin',
        brand: 'Glucophage',
        indications: 'treat type 2 diabetes'
      },
      {
        id: 4,
        doctorId: 1,
        generic: 'omeprazole',
        brand: 'Prilosec',
        indications: 'treat gastroesophageal reflux disease '
      },
      {
        id: 13,
        doctorId: 1,
        generic: 'ham',
        brand: 'cheese',
        indications: 'milk'
      },
      {
        id: 5,
        doctorId: 1,
        generic: 'azithromycinn',
        brand: 'Zithromax',
        indications: 'treat infections caused by bacteria'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
      }
    ],
    doctors: [],
    patients: [
      {
        id: 2,
        doctorId: 1,
        name: 'Taylor Swift',
        dob: '12/13/1989',
        phone: '415-888-4438',
        address: '80 Heaven Rd. Miami, FL 39555'
      },
      {
        id: 3,
        doctorId: 1,
        name: 'Justin Bieber',
        dob: '3/1/1994',
        phone: '510-333-4455',
        address: '100 Hollywood Dr. LA, CA 93103'
      },
      {
        id: 4,
        doctorId: 1,
        name: 'Emma Stone',
        dob: '11/6/1988',
        phone: '925-222-4444',
        address: '48 La La Lane, LA, CA 93105'
      },
      {
        id: 6,
        doctorId: 1,
        name: 'Kim Kardashian',
        dob: '10/21/1980',
        phone: '123-456-7899',
        address: '804 3rd St., San Rafael, CA 94901'
      },
      {
        id: 8,
        doctorId: 1,
        name: 'Katie Kardashian',
        dob: '10/21/1980',
        phone: '510-456-7890',
        address: '804 4th St., San Rafael, CA 94901'
      },
      {
        id: 1,
        doctorId: 1,
        name: 'Lisa Chang',
        dob: '12/10/1987',
        phone: '415-123-4567',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 12,
        doctorId: 1,
        name: 'Eric',
        dob: '4/12/1969',
        phone: '415-222-4444',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 13,
        doctorId: null,
        name: 'Justin',
        dob: '3/3/1987',
        phone: '4153333367',
        address: '123 San Rafael Rd.'
      }
    ],
    rxInfo: null
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
test('rootReducer', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        {
          id: 11,
          doctorId: 1,
          generic: 'acetominophen',
          brand: 'Tylenol',
          indications: 'allergy'
        },
        {
          id: 12,
          doctorId: 1,
          generic: 'abc',
          brand: 'def',
          indications: 'ghi'
        },
        {
          id: 1,
          doctorId: 1,
          generic: 'atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol'
        },
        {
          id: 2,
          doctorId: 1,
          generic: 'levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism'
        },
        {
          id: 3,
          doctorId: 1,
          generic: 'metformin',
          brand: 'Glucophage',
          indications: 'treat type 2 diabetes'
        },
        {
          id: 4,
          doctorId: 1,
          generic: 'omeprazole',
          brand: 'Prilosec',
          indications: 'treat gastroesophageal reflux disease '
        },
        {
          id: 13,
          doctorId: 1,
          generic: 'ham',
          brand: 'cheese',
          indications: 'milk'
        },
        {
          id: 5,
          doctorId: 1,
          generic: 'azithromycinn',
          brand: 'Zithromax',
          indications: 'treat infections caused by bacteria'
        }
      ],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null,
      doctorInfo: [
        null,
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
        }
      ],
      doctors: [],
      patients: [
        {
          id: 2,
          doctorId: 1,
          name: 'Taylor Swift',
          dob: '12/13/1989',
          phone: '415-888-4438',
          address: '80 Heaven Rd. Miami, FL 39555'
        },
        {
          id: 3,
          doctorId: 1,
          name: 'Justin Bieber',
          dob: '3/1/1994',
          phone: '510-333-4455',
          address: '100 Hollywood Dr. LA, CA 93103'
        },
        {
          id: 4,
          doctorId: 1,
          name: 'Emma Stone',
          dob: '11/6/1988',
          phone: '925-222-4444',
          address: '48 La La Lane, LA, CA 93105'
        },
        {
          id: 6,
          doctorId: 1,
          name: 'Kim Kardashian',
          dob: '10/21/1980',
          phone: '123-456-7899',
          address: '804 3rd St., San Rafael, CA 94901'
        },
        {
          id: 8,
          doctorId: 1,
          name: 'Katie Kardashian',
          dob: '10/21/1980',
          phone: '510-456-7890',
          address: '804 4th St., San Rafael, CA 94901'
        },
        {
          id: 1,
          doctorId: 1,
          name: 'Lisa Chang',
          dob: '12/10/1987',
          phone: '415-123-4567',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 12,
          doctorId: 1,
          name: 'Eric',
          dob: '4/12/1969',
          phone: '415-222-4444',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 13,
          doctorId: null,
          name: 'Justin',
          dob: '3/3/1987',
          phone: '4153333367',
          address: '123 San Rafael Rd.'
        }
      ],
      rxInfo: null
    },
    { type: 'DELETE_PATIENT', patientId: 13 }
  );
  expect(currentState).toEqual({
    RxItems: [
      {
        id: 11,
        doctorId: 1,
        generic: 'acetominophen',
        brand: 'Tylenol',
        indications: 'allergy'
      },
      { id: 12, doctorId: 1, generic: 'abc', brand: 'def', indications: 'ghi' },
      {
        id: 1,
        doctorId: 1,
        generic: 'atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol'
      },
      {
        id: 2,
        doctorId: 1,
        generic: 'levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism'
      },
      {
        id: 3,
        doctorId: 1,
        generic: 'metformin',
        brand: 'Glucophage',
        indications: 'treat type 2 diabetes'
      },
      {
        id: 4,
        doctorId: 1,
        generic: 'omeprazole',
        brand: 'Prilosec',
        indications: 'treat gastroesophageal reflux disease '
      },
      {
        id: 13,
        doctorId: 1,
        generic: 'ham',
        brand: 'cheese',
        indications: 'milk'
      },
      {
        id: 5,
        doctorId: 1,
        generic: 'azithromycinn',
        brand: 'Zithromax',
        indications: 'treat infections caused by bacteria'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
      }
    ],
    doctors: [],
    patients: [
      {
        id: 2,
        doctorId: 1,
        name: 'Taylor Swift',
        dob: '12/13/1989',
        phone: '415-888-4438',
        address: '80 Heaven Rd. Miami, FL 39555'
      },
      {
        id: 3,
        doctorId: 1,
        name: 'Justin Bieber',
        dob: '3/1/1994',
        phone: '510-333-4455',
        address: '100 Hollywood Dr. LA, CA 93103'
      },
      {
        id: 4,
        doctorId: 1,
        name: 'Emma Stone',
        dob: '11/6/1988',
        phone: '925-222-4444',
        address: '48 La La Lane, LA, CA 93105'
      },
      {
        id: 6,
        doctorId: 1,
        name: 'Kim Kardashian',
        dob: '10/21/1980',
        phone: '123-456-7899',
        address: '804 3rd St., San Rafael, CA 94901'
      },
      {
        id: 8,
        doctorId: 1,
        name: 'Katie Kardashian',
        dob: '10/21/1980',
        phone: '510-456-7890',
        address: '804 4th St., San Rafael, CA 94901'
      },
      {
        id: 1,
        doctorId: 1,
        name: 'Lisa Chang',
        dob: '12/10/1987',
        phone: '415-123-4567',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 12,
        doctorId: 1,
        name: 'Eric',
        dob: '4/12/1969',
        phone: '415-222-4444',
        address: '123 Main St. SF, CA 94102'
      }
    ],
    rxInfo: null
  });
});

test('rootReducer', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        {
          id: 11,
          doctorId: 1,
          generic: 'acetominophen',
          brand: 'Tylenol',
          indications: 'allergy'
        },
        {
          id: 12,
          doctorId: 1,
          generic: 'abc',
          brand: 'def',
          indications: 'ghi'
        },
        {
          id: 1,
          doctorId: 1,
          generic: 'atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol'
        },
        {
          id: 2,
          doctorId: 1,
          generic: 'levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism'
        },
        {
          id: 3,
          doctorId: 1,
          generic: 'metformin',
          brand: 'Glucophage',
          indications: 'treat type 2 diabetes'
        },
        {
          id: 4,
          doctorId: 1,
          generic: 'omeprazole',
          brand: 'Prilosec',
          indications: 'treat gastroesophageal reflux disease '
        },
        {
          id: 13,
          doctorId: 1,
          generic: 'ham',
          brand: 'cheese',
          indications: 'milk'
        },
        {
          id: 5,
          doctorId: 1,
          generic: 'azithromycinn',
          brand: 'Zithromax',
          indications: 'treat infections caused by bacteria'
        }
      ],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null,
      doctorInfo: [
        null,
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
        },
        null
      ],
      doctors: [],
      patients: [
        {
          id: 2,
          doctorId: 1,
          name: 'Taylor Swift',
          dob: '12/13/1989',
          phone: '415-888-4438',
          address: '80 Heaven Rd. Miami, FL 39555'
        },
        {
          id: 3,
          doctorId: 1,
          name: 'Justin Bieber',
          dob: '3/1/1994',
          phone: '510-333-4455',
          address: '100 Hollywood Dr. LA, CA 93103'
        },
        {
          id: 4,
          doctorId: 1,
          name: 'Emma Stone',
          dob: '11/6/1988',
          phone: '925-222-4444',
          address: '48 La La Lane, LA, CA 93105'
        },
        {
          id: 6,
          doctorId: 1,
          name: 'Kim Kardashian',
          dob: '10/21/1980',
          phone: '123-456-7899',
          address: '804 3rd St., San Rafael, CA 94901'
        },
        {
          id: 8,
          doctorId: 1,
          name: 'Katie Kardashian',
          dob: '10/21/1980',
          phone: '510-456-7890',
          address: '804 4th St., San Rafael, CA 94901'
        },
        {
          id: 1,
          doctorId: 1,
          name: 'Lisa Chang',
          dob: '12/10/1987',
          phone: '415-123-4567',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 12,
          doctorId: 1,
          name: 'Eric',
          dob: '4/12/1969',
          phone: '415-222-4444',
          address: '123 Main St. SF, CA 94102'
        }
      ],
      rxInfo: null
    },
    {
      type: 'SUBMIT_LOGININFO',
      addedInfo: {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDgxODIsImlhdCI6MTUxMzg0Nzg4MiwibmJmIjoxNTEzODQ3ODgyLCJpZGVudGl0eSI6MX0.ekB4_jST5a98KA-uQSdH_jadmtPiIZdQUwZN9oh5vFA'
      }
    }
  );
  expect(currentState).toEqual({
    RxItems: [
      {
        id: 11,
        doctorId: 1,
        generic: 'acetominophen',
        brand: 'Tylenol',
        indications: 'allergy'
      },
      { id: 12, doctorId: 1, generic: 'abc', brand: 'def', indications: 'ghi' },
      {
        id: 1,
        doctorId: 1,
        generic: 'atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol'
      },
      {
        id: 2,
        doctorId: 1,
        generic: 'levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism'
      },
      {
        id: 3,
        doctorId: 1,
        generic: 'metformin',
        brand: 'Glucophage',
        indications: 'treat type 2 diabetes'
      },
      {
        id: 4,
        doctorId: 1,
        generic: 'omeprazole',
        brand: 'Prilosec',
        indications: 'treat gastroesophageal reflux disease '
      },
      {
        id: 13,
        doctorId: 1,
        generic: 'ham',
        brand: 'cheese',
        indications: 'milk'
      },
      {
        id: 5,
        doctorId: 1,
        generic: 'azithromycinn',
        brand: 'Zithromax',
        indications: 'treat infections caused by bacteria'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
      },
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDgxODIsImlhdCI6MTUxMzg0Nzg4MiwibmJmIjoxNTEzODQ3ODgyLCJpZGVudGl0eSI6MX0.ekB4_jST5a98KA-uQSdH_jadmtPiIZdQUwZN9oh5vFA'
      }
    ],
    doctors: [],
    patients: [
      {
        id: 2,
        doctorId: 1,
        name: 'Taylor Swift',
        dob: '12/13/1989',
        phone: '415-888-4438',
        address: '80 Heaven Rd. Miami, FL 39555'
      },
      {
        id: 3,
        doctorId: 1,
        name: 'Justin Bieber',
        dob: '3/1/1994',
        phone: '510-333-4455',
        address: '100 Hollywood Dr. LA, CA 93103'
      },
      {
        id: 4,
        doctorId: 1,
        name: 'Emma Stone',
        dob: '11/6/1988',
        phone: '925-222-4444',
        address: '48 La La Lane, LA, CA 93105'
      },
      {
        id: 6,
        doctorId: 1,
        name: 'Kim Kardashian',
        dob: '10/21/1980',
        phone: '123-456-7899',
        address: '804 3rd St., San Rafael, CA 94901'
      },
      {
        id: 8,
        doctorId: 1,
        name: 'Katie Kardashian',
        dob: '10/21/1980',
        phone: '510-456-7890',
        address: '804 4th St., San Rafael, CA 94901'
      },
      {
        id: 1,
        doctorId: 1,
        name: 'Lisa Chang',
        dob: '12/10/1987',
        phone: '415-123-4567',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 12,
        doctorId: 1,
        name: 'Eric',
        dob: '4/12/1969',
        phone: '415-222-4444',
        address: '123 Main St. SF, CA 94102'
      }
    ],
    rxInfo: null
  });
});

test('rootReducer', () => {
  let currentState;
  currentState = rootReducer(
    {
      RxItems: [
        {
          id: 11,
          doctorId: 1,
          generic: 'acetominophen',
          brand: 'Tylenol',
          indications: 'allergy'
        },
        {
          id: 12,
          doctorId: 1,
          generic: 'abc',
          brand: 'def',
          indications: 'ghi'
        },
        {
          id: 1,
          doctorId: 1,
          generic: 'atorvastatin',
          brand: 'Liptor',
          indications: 'lower cholesterol'
        },
        {
          id: 2,
          doctorId: 1,
          generic: 'levothyroxine',
          brand: 'Synthroid',
          indications: 'treat hypothyroidism'
        },
        {
          id: 3,
          doctorId: 1,
          generic: 'metformin',
          brand: 'Glucophage',
          indications: 'treat type 2 diabetes'
        },
        {
          id: 4,
          doctorId: 1,
          generic: 'omeprazole',
          brand: 'Prilosec',
          indications: 'treat gastroesophageal reflux disease '
        },
        {
          id: 13,
          doctorId: 1,
          generic: 'ham',
          brand: 'cheese',
          indications: 'milk'
        },
        {
          id: 5,
          doctorId: 1,
          generic: 'azithromycinn',
          brand: 'Zithromax',
          indications: 'treat infections caused by bacteria'
        }
      ],
      selectedItemIds: [],
      orderItems: [],
      patientInfo: null,
      doctorInfo: [
        null,
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
        },
        null,
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDgxODIsImlhdCI6MTUxMzg0Nzg4MiwibmJmIjoxNTEzODQ3ODgyLCJpZGVudGl0eSI6MX0.ekB4_jST5a98KA-uQSdH_jadmtPiIZdQUwZN9oh5vFA'
        },
        {
          token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDg1MjQsImlhdCI6MTUxMzg0ODIyNCwibmJmIjoxNTEzODQ4MjI0LCJpZGVudGl0eSI6MX0.8biWjVb_vHm7w36sfVv9Iue4u6O_9d_iQycQgGyDTVQ'
        }
      ],
      doctors: [],
      patients: [
        {
          id: 2,
          doctorId: 1,
          name: 'Taylor Swift',
          dob: '12/13/1989',
          phone: '415-888-4438',
          address: '80 Heaven Rd. Miami, FL 39555'
        },
        {
          id: 3,
          doctorId: 1,
          name: 'Justin Bieber',
          dob: '3/1/1994',
          phone: '510-333-4455',
          address: '100 Hollywood Dr. LA, CA 93103'
        },
        {
          id: 4,
          doctorId: 1,
          name: 'Emma Stone',
          dob: '11/6/1988',
          phone: '925-222-4444',
          address: '48 La La Lane, LA, CA 93105'
        },
        {
          id: 6,
          doctorId: 1,
          name: 'Kim Kardashian',
          dob: '10/21/1980',
          phone: '123-456-7899',
          address: '804 3rd St., San Rafael, CA 94901'
        },
        {
          id: 8,
          doctorId: 1,
          name: 'Katie Kardashian',
          dob: '10/21/1980',
          phone: '510-456-7890',
          address: '804 4th St., San Rafael, CA 94901'
        },
        {
          id: 1,
          doctorId: 1,
          name: 'Lisa Chang',
          dob: '12/10/1987',
          phone: '415-123-4567',
          address: '123 Main St. SF, CA 94102'
        },
        {
          id: 12,
          doctorId: 1,
          name: 'Eric',
          dob: '4/12/1969',
          phone: '415-222-4444',
          address: '123 Main St. SF, CA 94102'
        }
      ],
      rxInfo: null
    },
    {
      type: 'SUBMIT_RX',
      rxInfo: {
        name: 'Taylor Swift',
        dob: '12/13/1989',
        generic: 'acetominophen',
        brand: 'Tylenol',
        indications: 'allergy',
        strength: '10mg',
        dosage: 'Take one tablet by mouth once daily'
      }
    }
  );
  expect(currentState).toEqual({
    RxItems: [
      {
        id: 11,
        doctorId: 1,
        generic: 'acetominophen',
        brand: 'Tylenol',
        indications: 'allergy'
      },
      { id: 12, doctorId: 1, generic: 'abc', brand: 'def', indications: 'ghi' },
      {
        id: 1,
        doctorId: 1,
        generic: 'atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol'
      },
      {
        id: 2,
        doctorId: 1,
        generic: 'levothyroxine',
        brand: 'Synthroid',
        indications: 'treat hypothyroidism'
      },
      {
        id: 3,
        doctorId: 1,
        generic: 'metformin',
        brand: 'Glucophage',
        indications: 'treat type 2 diabetes'
      },
      {
        id: 4,
        doctorId: 1,
        generic: 'omeprazole',
        brand: 'Prilosec',
        indications: 'treat gastroesophageal reflux disease '
      },
      {
        id: 13,
        doctorId: 1,
        generic: 'ham',
        brand: 'cheese',
        indications: 'milk'
      },
      {
        id: 5,
        doctorId: 1,
        generic: 'azithromycinn',
        brand: 'Zithromax',
        indications: 'treat infections caused by bacteria'
      }
    ],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDc1NjcsImlhdCI6MTUxMzg0NzI2NywibmJmIjoxNTEzODQ3MjY3LCJpZGVudGl0eSI6MX0.K2wWLznhpw-GofU_mFN-G6hpU5aD7yc0pF1oYLr4mwU'
      },
      null,
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDgxODIsImlhdCI6MTUxMzg0Nzg4MiwibmJmIjoxNTEzODQ3ODgyLCJpZGVudGl0eSI6MX0.ekB4_jST5a98KA-uQSdH_jadmtPiIZdQUwZN9oh5vFA'
      },
      {
        token:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MTM4NDg1MjQsImlhdCI6MTUxMzg0ODIyNCwibmJmIjoxNTEzODQ4MjI0LCJpZGVudGl0eSI6MX0.8biWjVb_vHm7w36sfVv9Iue4u6O_9d_iQycQgGyDTVQ'
      }
    ],
    doctors: [],
    patients: [
      {
        id: 2,
        doctorId: 1,
        name: 'Taylor Swift',
        dob: '12/13/1989',
        phone: '415-888-4438',
        address: '80 Heaven Rd. Miami, FL 39555'
      },
      {
        id: 3,
        doctorId: 1,
        name: 'Justin Bieber',
        dob: '3/1/1994',
        phone: '510-333-4455',
        address: '100 Hollywood Dr. LA, CA 93103'
      },
      {
        id: 4,
        doctorId: 1,
        name: 'Emma Stone',
        dob: '11/6/1988',
        phone: '925-222-4444',
        address: '48 La La Lane, LA, CA 93105'
      },
      {
        id: 6,
        doctorId: 1,
        name: 'Kim Kardashian',
        dob: '10/21/1980',
        phone: '123-456-7899',
        address: '804 3rd St., San Rafael, CA 94901'
      },
      {
        id: 8,
        doctorId: 1,
        name: 'Katie Kardashian',
        dob: '10/21/1980',
        phone: '510-456-7890',
        address: '804 4th St., San Rafael, CA 94901'
      },
      {
        id: 1,
        doctorId: 1,
        name: 'Lisa Chang',
        dob: '12/10/1987',
        phone: '415-123-4567',
        address: '123 Main St. SF, CA 94102'
      },
      {
        id: 12,
        doctorId: 1,
        name: 'Eric',
        dob: '4/12/1969',
        phone: '415-222-4444',
        address: '123 Main St. SF, CA 94102'
      }
    ],
    rxInfo: {
      name: 'Taylor Swift',
      dob: '12/13/1989',
      generic: 'acetominophen',
      brand: 'Tylenol',
      indications: 'allergy',
      strength: '10mg',
      dosage: 'Take one tablet by mouth once daily'
    }
  });
});
