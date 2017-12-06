import updateRxItem from '../../api/updateRxItem';

export default function updateRxItemProcess(itemId, item, change, history) {
  return (dispatch, getState) => {
    return updateRxItem(itemId, item, change).then(updatedRxItem => {
      dispatch({ type: 'UPDATE_ITEM', itemId, item: updatedRxItem });
      history.push('/drugs');
      return updatedRxItem;
    });
  };
}
