import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
//import { withRouter } from 'withRouter';
import UpdateRxPage from '../../components/UpdateRxPage';

import updateRxItemProcess from '../thunks/updateRxItemProcess';
import getRxItemProcess from '../thunks/getRxItemProcess';
import getRxItemsProcess from '../thunks/getRxItemsProcess';

function mapStateToProps(state, ownProps) {
  // store.getState
  const { RxItems } = state;

  //if (RxItems===null) I want to dislay loading

  const { drugId } = ownProps.match.params;
  const drugIdInt = parseInt(drugId, 10);
  const RxItem = RxItems.find(item => item.id === drugIdInt) || [];
  //const RxItem = RxItemById[drugId] || null;

  return {
    RxItem
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  // let itemId = ownProps.match.params.drugId;
  return {
    onMount: () => {
      dispatch(getRxItemsProcess()).then(() => {
        dispatch(getRxItemProcess(ownProps.match.params.drugId));
      });
    },
    //onMount: () => dispatch(getRxItemsProcess()),
    //onMount: () => dispatch(getRxItemProcess(ownProps.match.params.drugId)),
    onEditRx: (itemId, item) => {
      console.log(itemId, item);
      return dispatch(
        updateRxItemProcess(itemId, item, {
          generic: item.generic,
          brand: item.brand,
          indications: item.indications
          //dosage: item.dosage
        })
      );
    }
  };
}
const connectToStore = connect(mapStateToProps, mapDispatchToProps);
//const connectToStore = connect(mapDispatchToProps);
const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(UpdateRxPage);
