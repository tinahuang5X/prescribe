export default function rootReducer(
  currentState = {
    RxItems: null,

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
    case 'ADD_ITEM':
      return {
        ...currentState,
        orderItems: [
          ...currentState.orderItems,
          currentState.RxItems.find(RxItem => RxItem.id === action.itemId)
        ]
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
