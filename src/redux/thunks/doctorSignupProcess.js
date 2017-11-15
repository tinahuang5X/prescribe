import doctorSignup from '../../api/doctorSignup';

export default function doctorSignupProcess(doctorInfo, history) {
  return (dispatch, getState) => {
    return doctorSignup(doctorInfo, history).then(createdDoctor => {
      dispatch({
        type: 'SUBMIT_MDINFO',

        addedDoctor: createdDoctor
      });
      return createdDoctor;
    });
  };
}
