import createRxItem from '../../api/createRxItem';

export default function createRxItemProcess(newItem, history) {
  return (dispatch, getState) => {
    return createRxItem(newItem).then(createdRxItem => {
      dispatch({
        type: 'SUBMIT_RXINFO',

        addedItem: createdRxItem
      });
      history.push('/drugs');
      return createdRxItem;
    });
  };
}
