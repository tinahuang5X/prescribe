import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import OrderRxPage from '../../components/OrderRxPage';

import getRxItemsProcess from '../thunks/getRxItemsProcess';
import getFilteredRxItemsProcess from '../thunks/getFilteredRxItemsProcess';
import getSortedRxItemsProcess from '../thunks/getSortedRxItemsProcess';
import deleteRxItemProcess from '../thunks/deleteRxItemProcess';
import updateRxItemProcess from '../thunks/updateRxItemProcess';

function mapStateToProps(state, ownProps) {
  return {
    filter: state.filter,
    sort: state.sort,
    RxItems: state.RxItems,
    selected: state.selected,
    selectedItemIds: state.selectedItemIds,
    orderItems: state.orderItems,
    patientInfo: state.patientInfo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => dispatch(getRxItemsProcess()),
    onSubmitFilter: filter => dispatch(getFilteredRxItemsProcess(filter)),
    onSubmitSort: sort => dispatch(getSortedRxItemsProcess(sort)),
    onAddItem: itemId => dispatch({ type: 'ADD_ITEM', itemId }),
    onRemoveItem: itemId => dispatch(deleteRxItemProcess(itemId)),
    onSelectItem: itemId => {
      console.log(itemId, 'is this unique?');
      dispatch({ type: 'SELECT_ITEM', itemId });
    },

    onDeselectItem: itemId => dispatch({ type: 'DESELECT_ITEM', itemId }),
    onSwitch: (itemId, item) => {
      console.log('hi', item, item.brand);
      dispatch(updateRxItemProcess(itemId, item, { generic: item.brand }));
    },
    // onAddRx: ({ generic, brand, indications, dosage, sideeffects }) =>
    //   dispatch(
    //     createRxItemProcess({
    //       generic,
    //       brand,
    //       indications,
    //       dosage,
    //       sideeffects
    //     })
    //   ),

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
