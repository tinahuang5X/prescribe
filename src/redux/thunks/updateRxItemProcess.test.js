import updateRxItem from '../../api/updateRxItem';

import data from '../../mock-data';
import updateRxItemProcess from './updateRxItemProcess';

jest.mock('../../api/updateRxItem');

describe('updateRxItemProcess', () => {
  it('Calls updateRxItem API utility, returns the updated created item, and dispatches UPDATE_ITEM action', () => {
    const { itemId, ...change } = data.RxItems[0];
    const thunk = updateRxItemProcess(itemId, data.RxItems[0], change);
    expect(typeof thunk).toBe('function');

    updateRxItem.mockReturnValueOnce(Promise.resolve({ ...data.RxItems[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(updatedRxItem => {
      expect(updateRxItem).toBeCalled();
      expect(updatedRxItem).toEqual({ ...data.RxItems[0] });
      expect(dispatch).toBeCalledWith({
        type: 'UPDATE_ITEM',
        itemId,
        item: updatedRxItem
      });
    });
  });
});
