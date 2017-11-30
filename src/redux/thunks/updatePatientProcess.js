import updatePatient from '../../api/updatePatient';

export default function updatePatientProcess(patientId, patient, change) {
  return (dispatch, getState) => {
    return updatePatient(patientId, patient, change).then(updatedPatient => {
      dispatch({ type: 'UPDATE_PATIENT', patientId, patient: updatedPatient });
      return updatedPatient;
    });
  };
}
