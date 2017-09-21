import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import OrderRxPage from '../../components/OrderRxPage';

import getRxItemsProcess from '../thunks/getRxItemsProcess';
import createRxItemProcess from '../thunks/createRxItemProcess';
import deleteRxItemProcess from '../thunks/deleteRxItemProcess';
import updateRxItemProcess from '../thunks/updateRxItemProcess';

function mapStateToProps(state, ownProps) {
  return {
    RxItems: state.RxItems,
    selectedItemIds: state.selectedItemIds,
    orderItems: state.orderItems,
    patientInfo: state.patientInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getRxItemsProcess()),
    onAddItem: itemId => dispatch({ type: 'ADD_ITEM', itemId }),
    onRemoveItem: itemId => dispatch(deleteRxItemProcess(itemId)),
    onSelectItem: itemId => {
      console.log(itemId, 'is this unique?');
      dispatch({ type: 'SELECT_ITEM', itemId });
    },

    onDeselectItem: itemId => dispatch({ type: 'DESELECT_ITEM', itemId }),
    onAddRx: ({ generic, brand, indications, dosage, sideeffects }) =>
      dispatch(
        createRxItemProcess({
          generic,
          brand,
          indications,
          dosage,
          sideeffects
        })
      ),

    onSubmit: ({ name, dob }) =>
      dispatch({
        type: 'SUBMIT_INFO',
        patientInfo: { name, dob }
      }),
    onTransmit: () =>
      dispatch({
        type: 'TRANSMIT_ORDER',
        patientInfo: null,
        orderItems: [],
        selectedItemIds: []
      })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(OrderRxPage);
