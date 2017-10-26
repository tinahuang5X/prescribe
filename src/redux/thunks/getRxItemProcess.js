import getRxItem from '../.././api/getRxItem';

export default function getRxItemProcess(itemId) {
  return (dispatch, getState) => {
    return getRxItem(itemId).then(RxItem => {
      console.log(RxItem);
      dispatch({ type: 'SET_ITEM', itemId, RxItem });
      return RxItem;
    });
  };
}
