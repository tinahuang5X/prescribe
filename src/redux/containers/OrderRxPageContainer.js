import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import OrderRxPage from '../../components/OrderRxPage';

import getRxItemsProcess from '../thunks/getRxItemsProcess';

function mapStateToProps(state, ownProps) {
  return {
    RxItems: state.RxItems,
    orderItems: state.orderItems,
    patientInfo: state.patientInfo
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getRxItemsProcess()),
    onAddItem: itemId => dispatch({ type: 'ADD_ITEM', itemId }),
    onSubmit: ({ name, dob }) =>
      dispatch({
        type: 'SUBMIT_INFO',
        patientInfo: { name, dob }
      }),
    onTransmit: () =>
      dispatch({
        type: 'TRANSMIT_ORDER',
        patientInfo: null,
        orderItems: []
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
