//import { compose } from 'recompose';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import DrugsPage from '../../components/DrugsPage';

import getRxItemsProcess from '../thunks/getRxItemsProcess';

import deleteRxItemProcess from '../thunks/deleteRxItemProcess';
import updateRxItemProcess from '../thunks/updateRxItemProcess';
import createRxItemProcess from '../thunks/createRxItemProcess';

function mapStateToProps(state, ownProps) {
  console.log(state.errorType);
  return {
    RxItems: state.RxItems,
    errorType: state.errorType
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getRxItemsProcess()),

    onRemoveItem: itemId => dispatch(deleteRxItemProcess(itemId)),

    // onLogout: () => dispatch({ type: 'REMOVE_MDINFO', doctorInfo: null }),

    onLogout: () => {
      dispatch({ type: 'REMOVE_MDINFO', doctorInfo: null });

      dispatch({ type: 'REMOVE_LOGININFO_ERROR', errorType: null });
    },

    onAddRx: ({ generic, brand, indications }) =>
      dispatch(
        createRxItemProcess(
          {
            generic,
            brand,
            indications
          },
          ownProps.history
        )
      ),
    onEditRx: (itemId, item) => {
      console.log(itemId, item);
      return dispatch(
        updateRxItemProcess(
          itemId,
          item,
          {
            generic: item.generic,
            brand: item.brand,
            indications: item.indications
          },
          ownProps.history
        )
      );
    }
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(DrugsPage);
//export default compose(connectToStore)(OrderRxPage);
