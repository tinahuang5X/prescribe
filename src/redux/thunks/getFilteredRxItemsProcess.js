import getFilteredRxItems from '../.././api/getFilteredRxItems';

export default function getFilteredRxItemsProcess(filter) {
  return (dispatch, getState) => {
    return getFilteredRxItems(filter).then(RxItems => {
      dispatch({ type: 'SET_ITEMS', RxItems });
      return RxItems;
    });
  };
}
