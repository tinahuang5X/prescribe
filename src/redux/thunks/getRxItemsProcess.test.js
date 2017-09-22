import getRxItems from '../../api/getRxItems';
import data from '../../mock-data';

import getRxItemsProcess from './getRxItemsProcess';

jest.mock('../../api/getRxItems');

describe('getRxItemsProcess', () => {
  it('Calls getRxItems API utility, returns array of RxItems, and dispatches SET_ITEMS action', () => {
    const thunk = getRxItemsProcess();
    expect(typeof thunk).toBe('function');

    getRxItems.mockReturnValueOnce(Promise.resolve([...data.RxItems]));
    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState).then(RxItems => {
      expect(getRxItems).toBeCalled();
      expect(RxItems).toEqual([...data.RxItems]);
      expect(dispatch).toBeCalledWith({ type: 'SET_ITEMS', RxItems });
    });
  });
});
