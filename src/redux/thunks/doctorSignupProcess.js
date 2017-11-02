import doctorSignup from '../../api/doctorSignup';

export default function doctorSignupProcess(doctorInfo) {
  return (dispatch, getState) => {
    return doctorSignup(doctorInfo).then(createdDoctor => {
      dispatch({
        type: 'SUBMIT_MDINFO',

        addedDoctor: createdDoctor
      });
      return createdDoctor;
    });
  };
}
