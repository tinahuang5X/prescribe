import getPatients from '../.././api/getPatients';

export default function getPatientsProcess() {
  return (dispatch, getState) => {
    return getPatients().then(patients => {
      dispatch({ type: 'SET_PATIENTS', patients });
      return patients;
    });
  };
}
