import createPatient from '../../api/createPatient';

export default function createPatientProcess(newPatient, history) {
  return (dispatch, getState) => {
    return createPatient(newPatient).then(createdPatient => {
      dispatch({
        type: 'SUBMIT_PTINFO',

        addedPatient: createdPatient
      });

      history.push('/patients');
      return createdPatient;
    });
  };
}
