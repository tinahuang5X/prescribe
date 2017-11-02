export default function rootReducer(
  currentState = {
    RxItems: [],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [],
    doctors: []
  },
  action
) {
  switch (action.type) {
    //console.log(action);
    case 'SET_ITEMS':
      console.log(action.RxItems);
      return { ...currentState, RxItems: action.RxItems };
    case 'SET_ITEM':
      console.log(action.RxItem);
      return { ...currentState, RxItem: action.RxItem };
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

    case 'SUBMIT_MDINFO':
      return {
        ...currentState,
        doctors: [...currentState.doctors, action.addedDoctor]
      };
    case 'SUBMIT_INFO':
      return {
        ...currentState,
        patientInfo: action.patientInfo
      };
    case 'SUBMIT_LOGININFO':
      return {
        ...currentState,
        doctorInfo: [...currentState.doctorInfo, action.addedInfo]
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
