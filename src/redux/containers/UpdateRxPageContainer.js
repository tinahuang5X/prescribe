import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
//import { withRouter } from 'withRouter';
import UpdateRxPage from '../../components/UpdateRxPage';

import updateRxItemProcess from '../thunks/updateRxItemProcess';
import getRxItemProcess from '../thunks/getRxItemProcess';

function mapStateToProps(state, ownProps) {
  //   console.log(ownProps.match.params.drugId);
  //
  //   // if (RxItems===null) I want to dislay loading
  //
  //   const { itemId } = ownProps.match.params;
  //   //const RxItem = RxItems.find(item => item.id === drugId) || null;
  //   //const RxItem = RxItemById[drugId] || null;
  return {
    RxItem: state.RxItem
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  let itemId = ownProps.match.params.drugId;
  return {
    onMount: itemId => dispatch(getRxItemProcess(itemId)),
    onEditRx: (itemId, item) =>
      dispatch(
        updateRxItemProcess(itemId, item, {
          generic: item.generic,
          brand: item.brand,
          indications: item.indications,
          dosage: item.dosage
        })
      )
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
