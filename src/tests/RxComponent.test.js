import React from 'react';
import { shallow, mount } from 'enzyme';

import RxComponent from '../components/RxComponent';

describe('a unit test for RxComponent', () => {
  const RxItems = [
    {
      id: 1,

      generic: 'Atorvastatin',
      brand: 'Liptor',
      indications: 'lower cholesterol',
      dosage: '10 mg once daily'
      //sideeffects: 'allergic reaction, red skin rash'
    },
    {
      id: 2,

      generic: 'Levothyroxine',
      brand: 'Synthroid',
      indications: 'treat hypothyroidism',
      dosage: '100 mcg once daily'
      //sideeffects: 'hypersensitivity pneumonitis,'
    },
    {
      id: 3,

      generic: 'Metformin',
      brand: 'Glucophage',
      indications: 'treat type 2 diabetes',
      dosage: '500 mg: 1 tablet orally twice a day'
      //sideeffects: 'abdominal discomfort'
    },
    {
      id: 4,

      generic: 'Azithromycin',
      brand: 'Zithromax',
      indications: 'treat infections caused by bacteria',
      dosage: '500 mg: 1 tablet once daily for three days'
      //sideeffects: 'diarrhea'
    }
  ];
  const onAddItem = jest.fn();
  it('should test if onAddItem function is triggered when "ORDER" button is clicked', () => {
    const item = [
      {
        id: 1,

        generic: 'Atorvastatin',
        brand: 'Liptor',
        indications: 'lower cholesterol',
        dosage: '10 mg once daily'
        //sideeffects: 'allergic reaction, red skin rash'
      }
    ];
    const fullWrapper = mount(
      <RxComponent item={item} onAddItem={onAddItem} />
    );
    fullWrapper.find('RxItemComponent').find('.testClick').simulate('click');
    expect(onAddItem).toHaveBeenCalled();
  });

  it('should verify the expected number of RxItemComponents are rendered', () => {
    const shallowWrapper = shallow(
      <RxComponent items={RxItems} onAddItem={onAddItem} />
    );

    const numOfComponents = shallowWrapper.find('RxItemComponent');

    expect(numOfComponents.length).toEqual(RxItems.length);
  });

  it('tests children elements with full rendering', () => {
    expect(mount(<RxComponent items={RxItems} />).children()).toHaveLength(
      RxItems.length
    );
  });

  it('tests against parent and children components', () => {
    expect(mount(<RxComponent items={RxItems} />).find('.card')).toHaveLength(
      RxItems.length
    );
  });
});
