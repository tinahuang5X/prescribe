import createPatient from '../../api/createPatient';

export default function createPatientProcess(newPatient) {
  return (dispatch, getState) => {
    return createPatient(newPatient).then(createdPatient => {
      dispatch({
        type: 'SUBMIT_PTINFO',

        addedPatient: createdPatient
      });
      return createdPatient;
    });
  };
}
