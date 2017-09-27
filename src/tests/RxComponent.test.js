import React from 'react';
import { shallow, mount } from 'enzyme';

import RxComponent from '../components/RxComponent';
import RxItemComponent from '../components/RxItemComponent';

const item = [
  {
    id: 5,

    generic: 'a',
    brand: 'b',
    indications: 'c',
    dosage: 'd'
  }
];

let RxItems = [
  {
    id: 1,

    generic: 'Atorvastatin',
    brand: 'Liptor',
    indications: 'lower cholesterol',
    dosage: '10 mg once daily'
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

describe('a unit test for RxComponent', () => {
  it('should test if onAddItem function is triggered when "ORDER" button is clicked', () => {
    const onAddItem = jest.fn();
    const selected = true;
    mount(
      <RxItemComponent item={item} onAddItem={onAddItem} selected={selected} />
    )
      .find('.testClick')
      .simulate('click');
    expect(onAddItem).toHaveBeenCalled();
    //console.log(fullWrapper.debug());
  });

  it('should verify the expected number of RxItemComponents are rendered', () => {
    const shallowWrapper = shallow(<RxComponent items={RxItems} />);

    const numOfComponents = shallowWrapper.find('RxItemComponent');

    expect(numOfComponents.length).toEqual(RxItems.length);
  });

  it('tests children elements with full rendering', () => {
    const fullWrapper = mount(<RxComponent items={RxItems} />);
    expect(fullWrapper.children()).toHaveLength(RxItems.length);
  });

  it('tests against parent and children components', () => {
    const fullWrapper = mount(<RxComponent items={RxItems} />);
    expect(fullWrapper.find('.card')).toHaveLength(RxItems.length);
  });
});
