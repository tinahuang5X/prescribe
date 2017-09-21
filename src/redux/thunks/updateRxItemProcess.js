import updateRxItem from '../../api/updateRxItem';

export default function updateRxItemProcess(itemId, item, change) {
  return (dispatch, getState) => {
    return updateRxItem(itemId, item, change).then(updatedRxItem => {
      dispatch({ type: 'UPDATE_ITEM', itemId, item: updatedRxItem });
      return updatedRxItem;
    });
  };
}
