import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
//import { withRouter } from 'withRouter';
import UpdatePtPage from '../../components/UpdatePtPage';

import updatePatientProcess from '../thunks/updatePatientProcess';
import getPatientProcess from '../thunks/getPatientProcess';
import getPatientsProcess from '../thunks/getPatientsProcess';

function mapStateToProps(state, ownProps) {
  // store.getState
  const { patients } = state;

  //if (Patients===null) I want to dislay loading

  const { patientId } = ownProps.match.params;
  const patientIdInt = parseInt(patientId, 10);
  const patient = patients.find(patient => patient.id === patientIdInt) || [];
  //const Patient = PatientById[patientId] || null;

  return {
    patient
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  let patientId = ownProps.match.params.patientId;
  console.log(patientId);
  return {
    onMount: () => {
      dispatch(getPatientsProcess()).then(() => {
        dispatch(getPatientProcess(ownProps.match.params.patientId));
      });
    },
    //onMount: () => dispatch(getPatientsProcess()),
    //onMount: () => dispatch(getPatientProcess(ownProps.match.params.patientId)),
    onEditPt: (patientId, patient) => {
      console.log(patientId, patient);
      return dispatch(
        updatePatientProcess(patientId, patient, {
          name: patient.name,
          dob: patient.dob,
          phone: patient.phone,
          address: patient.address
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

export default compose(connectToStore, onDidMount)(UpdatePtPage);
