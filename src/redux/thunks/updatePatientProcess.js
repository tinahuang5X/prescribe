import updatePatient from '../../api/updatePatient';

export default function updatePatientProcess(
  patientId,
  patient,
  change,
  history
) {
  return (dispatch, getState) => {
    return updatePatient(patientId, patient, change).then(updatedPatient => {
      dispatch({ type: 'UPDATE_PATIENT', patientId, patient: updatedPatient });
      history.push('/patients');
      return updatedPatient;
    });
  };
}
