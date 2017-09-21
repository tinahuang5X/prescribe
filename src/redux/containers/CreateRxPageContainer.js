import { compose } from 'recompose';
import { connect } from 'react-redux';

import CreateRxPage from '../../components/CreateRxPage';

import createRxItemProcess from '../thunks/createRxItemProcess';

// function mapStateToProps(state, ownProps) {
//   return {
//     RxItems: state.RxItems,
//     selected: state.selected,
//     selectedItemIds: state.selectedItemIds
//   };
// }

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onAddRx: ({ generic, brand, indications, dosage, sideeffects }) =>
      dispatch(
        createRxItemProcess({
          generic,
          brand,
          indications,
          dosage,
          sideeffects
        })
      )
  };
}

const connectToStore = connect(null, mapDispatchToProps);

// const onDidMount = lifecycle({
//   componentDidMount() {
//     this.props.onMount();
//   }
// });

export default compose(connectToStore)(CreateRxPage);
