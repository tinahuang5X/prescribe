import deleteRxItem from '../../api/deleteRxItem';

import data from '../../mock-data';
import deleteRxItemProcess from './deleteRxItemProcess';

jest.mock('../../api/deleteRxItem');

describe('deleteRxItemProcess', () => {
  it('Calls deleteRxItem API utility and dispatches DELETE_ITEM action', () => {
    const thunk = deleteRxItemProcess(data.RxItems[0].id);
    expect(typeof thunk).toBe('function');

    deleteRxItem.mockReturnValueOnce(Promise.resolve());

    const dispatch = jest.fn();
    const getState = () => ({});

    return thunk(dispatch, getState, {}).then(() => {
      expect(deleteRxItem).toBeCalled();
      expect(dispatch).toBeCalledWith({
        type: 'DELETE_ITEM',
        itemId: data.RxItems[0].id
      });
    });
  });
});
