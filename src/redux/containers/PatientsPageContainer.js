//import { compose } from 'recompose';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import PatientsPage from '../../components/PatientsPage';

import getPatientsProcess from '../thunks/getPatientsProcess';

import deletePatientProcess from '../thunks/deletePatientProcess';

function mapStateToProps(state, ownProps) {
  return {
    patients: state.patients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMount: () => dispatch(getPatientsProcess()),

    onRemovePatient: patientId => dispatch(deletePatientProcess(patientId))

    //onLogout: () => dispatch({ type: 'REMOVE_MDINFO', doctorInfo: null }),

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
  };
}

const connectToStore = connect(mapStateToProps, mapDispatchToProps);

const onDidMount = lifecycle({
  componentDidMount() {
    this.props.onMount();
  }
});

export default compose(connectToStore, onDidMount)(PatientsPage);
//export default compose(connectToStore)(OrderRxPage);
