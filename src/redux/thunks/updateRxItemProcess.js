import updateRxItem from '../../api/updateRxItem';

export default function updateRxItemProcess(itemId, change) {
  return (dispatch, getState) => {
    return updateRxItem(itemId, change).then(updatedRxItem => {
      dispatch({ type: 'UPDATE_ITEM', item: updatedRxItem });
      return updatedRxItem;
    });
  };
}
