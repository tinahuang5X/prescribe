export default function rootReducer(
  currentState = {
    RxItems: null,
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null
  },
  action
) {
  switch (action.type) {
    //console.log(action);
    case 'SET_ITEMS':
      console.log(action.RxItems);
      return { ...currentState, RxItems: action.RxItems };
    case 'SELECT_ITEM':
      return {
        ...currentState,
        selectedItemIds: [...currentState.selectedItemIds, action.itemId]
      };
    case 'DESELECT_ITEM':
      return {
        ...currentState,
        selectedItemIds: currentState.selectedItemIds.filter(
          selectedItemId => selectedItemId !== action.itemId
        )
      };
    case 'UPDATE_ITEM':
      console.log(currentState.RxItems);
      return {
        ...currentState,
        RxItems: currentState.RxItems.map(
          RxItem => (RxItem.id === action.itemId ? action.item : RxItem)
        )
      };
    case 'ADD_ITEM':
      return {
        ...currentState,
        orderItems: [
          ...currentState.orderItems,
          currentState.RxItems.find(RxItem => RxItem.id === action.itemId)
        ]
      };
    case 'DELETE_ITEM':
      return {
        ...currentState,
        // selectedMessageId: null,
        RxItems: currentState.RxItems.filter(
          RxItem => RxItem.id !== action.itemId
        )
      };

    case 'SUBMIT_RXINFO':
      return {
        ...currentState,
        RxItems: [...currentState.RxItems, action.addedItem]
      };
    case 'SUBMIT_INFO':
      return {
        ...currentState,
        patientInfo: action.patientInfo
      };

    case 'TRANSMIT_ORDER':
      return {
        ...currentState,
        patientInfo: action.patientInfo,
        orderItems: action.orderItems
      };
    default:
      return currentState;
  }
}
