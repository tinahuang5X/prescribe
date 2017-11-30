import getPatient from '../.././api/getPatient';

export default function getPatientProcess(patientId) {
  return (dispatch, getState) => {
    return getPatient(patientId).then(patient => {
      console.log(patient);
      dispatch({ type: 'SET_PATIENT', patientId, patient });
      return patient;
    });
  };
}
