import deletePatient from '../../api/deletePatient';

export default function deletePatientProcess(patientId) {
  return (dispatch, getState) => {
    return deletePatient(patientId).then(wasDeleted => {
      dispatch({ type: 'DELETE_PATIENT', patientId: patientId });
      return wasDeleted;
    });
  };
}
