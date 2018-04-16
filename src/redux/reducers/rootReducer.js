export default function rootReducer(
  currentState = {
    RxItems: [],
    selectedItemIds: [],
    orderItems: [],
    patientInfo: null,
    doctorInfo: [],
    doctors: [],
    patients: [],
    rxInfo: null,
    errorType: null
  },
  action
) {
  switch (action.type) {
    //console.log(action);
    case 'SET_ITEMS':
      console.log(action.RxItems);
      return { ...currentState, RxItems: action.RxItems };
    case 'SET_PATIENTS':
      console.log(action.patients);
      return { ...currentState, patients: action.patients };
    case 'SET_ITEM':
      console.log(action.RxItem);
      return { ...currentState, RxItem: action.RxItem };
    case 'SET_PATIENT':
      console.log(action.patient);
      return { ...currentState, patient: action.patient };
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

    case 'UPDATE_PATIENT':
      console.log(currentState.patients);
      return {
        ...currentState,
        patients: currentState.patients.map(
          patient =>
            patient.id === action.patientId ? action.patient : patient
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
        RxItems: currentState.RxItems.filter(
          RxItem => RxItem.id !== action.itemId
        )
      };
    case 'DELETE_PATIENT':
      return {
        ...currentState,
        // selectedMessageId: null,
        patients: currentState.patients.filter(
          patient => patient.id !== action.patientId
        )
      };

    case 'SUBMIT_RXINFO':
      return {
        ...currentState,
        RxItems: [...currentState.RxItems, action.addedItem]
      };
    case 'SUBMIT_PTINFO':
      return {
        ...currentState,
        patients: [...currentState.patients, action.addedPatient]
      };

    case 'SUBMIT_MDINFO':
      return {
        ...currentState,
        doctors: [...currentState.doctors, action.addedDoctor]
      };

    case 'SUBMIT_MDINFO_ERROR':
      return {
        ...currentState,
        errorType: action.type
      };

    case 'REMOVE_MDINFO':
      return {
        ...currentState,
        doctorInfo: [...currentState.doctorInfo, action.doctorInfo]
      };

    case 'SUBMIT_INFO':
      return {
        ...currentState,
        patientInfo: action.patientInfo
      };

    case 'SUBMIT_RX':
      console.log(action.rxInfo);
      return {
        ...currentState,
        rxInfo: action.rxInfo
      };

    case 'SUBMIT_LOGININFO':
      return {
        ...currentState,
        doctorInfo: [...currentState.doctorInfo, action.addedInfo]
      };
    case 'SUBMIT_LOGININFO_ERROR':
      return {
        ...currentState,
        errorType: action.type
      };
    case 'REMOVE_LOGININFO_ERROR':
      return {
        ...currentState,
        errorType: action.errorType
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
