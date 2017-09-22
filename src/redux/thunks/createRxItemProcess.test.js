import createRxItem from '../../api/createRxItem';

import data from '../../mock-data';
import createRxItemProcess from './createRxItemProcess';

jest.mock('../../api/createRxItem');

describe('createRxItemProcess', () => {
  it('Calls createRxItem API utility, returns the newly created note, and dispatches SUBMIT_RXINFO action', () => {
    const { id, ...itemWithoutId } = data.RxItems[0];
    const thunk = createRxItemProcess(itemWithoutId);
    expect(typeof thunk).toBe('function');

    createRxItem.mockReturnValueOnce(Promise.resolve({ ...data.RxItems[0] }));

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(createdRxItem => {
      expect(createRxItem).toBeCalled();
      expect(createdRxItem).toEqual({ ...data.RxItems[0] });
      expect(dispatch).toBeCalledWith({
        type: 'SUBMIT_RXINFO',
        addedItem: createdRxItem
      });
    });
  });
});
