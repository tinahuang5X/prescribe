//import { compose } from 'recompose';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';

import PatientsPage from '../../components/PatientsPage';

import getPatientsProcess from '../thunks/getPatientsProcess';

import deletePatientProcess from '../thunks/deletePatientProcess';
import updatePatientProcess from '../thunks/updatePatientProcess';
import createPatientProcess from '../thunks/createPatientProcess';

function mapStateToProps(state, ownProps) {
  return {
    patients: state.patients,
    errorType: state.errorType
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onMount: () => dispatch(getPatientsProcess()),

    onRemovePatient: patientId => dispatch(deletePatientProcess(patientId)),
    onAddPt: ({ name, dob, phone, address }) =>
      dispatch(
        createPatientProcess(
          {
            name,
            dob,
            phone,
            address
          },
          ownProps.history
        )
      ),

    onEditPt: (patientId, patient) => {
      console.log(patientId, patient);
      return dispatch(
        updatePatientProcess(
          patientId,
          patient,
          {
            name: patient.name,
            dob: patient.dob,
            phone: patient.phone,
            address: patient.address
          },
          ownProps.history
        )
      );
    },

    onLogout: () => {
      dispatch({ type: 'REMOVE_MDINFO', doctorInfo: null });

      dispatch({ type: 'REMOVE_LOGININFO_ERROR', errorType: null });
    }
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
