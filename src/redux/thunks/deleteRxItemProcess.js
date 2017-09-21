import deleteRxItem from '../../api/deleteRxItem';

export default function deleteRxItemProcess(itemId) {
  return (dispatch, getState) => {
    return deleteRxItem(itemId).then(wasDeleted => {
      dispatch({ type: 'DELETE_ITEM', itemId: itemId });
      return wasDeleted;
    });
  };
}
