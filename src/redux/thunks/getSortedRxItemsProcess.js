import getSortedRxItems from '../.././api/getSortedRxItems';

export default function getSortedRxItemsProcess(sort) {
  return (dispatch, getState) => {
    return getSortedRxItems(sort).then(RxItems => {
      dispatch({ type: 'SET_ITEMS', RxItems });
      return RxItems;
    });
  };
}
