import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import PrescribePage from '../../components/PrescribePage';
import getRxItemsProcess from '../thunks/getRxItemsProcess';
import getPatientsProcess from '../thunks/getPatientsProcess';

function mapStateToProps(state, ownProps) {
  console.log(state);
  return {
    RxItems: state.RxItems,
    patients: state.patients
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    // onMount: () => dispatch(getRxItemsProcess()),
    onMount: () => {
      dispatch(getPatientsProcess()).then(() => {
        dispatch(getRxItemsProcess());
      });
    },

    onLogout: () => dispatch({ type: 'REMOVE_MDINFO', doctorInfo: null })
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(PrescribePage);
