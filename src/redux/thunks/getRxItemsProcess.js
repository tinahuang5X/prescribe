import getRxItems from '../.././api/getRxItems';

export default function getRxItemsProcess() {
  return (dispatch, getState) => {
    return getRxItems().then(RxItems => {
      dispatch({ type: 'SET_ITEMS', RxItems });
      return RxItems;
    });
  };
}
