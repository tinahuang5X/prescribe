import { compose } from 'recompose';
import { connect } from 'react-redux';

import UpdateRxPage from '../../components/UpdateRxPage';

import updateRxItemProcess from '../thunks/updateRxItemProcess';

function mapStateToProps(state, ownProps) {
  // store.getState
  const { RxItems } = state;

  //if (RxItems===null) I want to dislay loading

  const { drugId } = ownProps.match.params;
  const RxItem = RxItems.find(item => item.id === drugId) || null;
  //const RxItem = RxItemById[drugId] || null;
  return {
    RxItem
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
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

export default compose(connectToStore)(UpdateRxPage);
