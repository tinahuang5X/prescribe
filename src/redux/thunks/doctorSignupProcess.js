import doctorSignup from '../../api/doctorSignup';

export default function doctorSignupProcess(doctorInfo, history) {
  return (dispatch, getState) => {
    return doctorSignup(doctorInfo)
      .then(createdDoctor => {
        console.log(createdDoctor);

        dispatch({
          type: 'SUBMIT_MDINFO',
          addedDoctor: createdDoctor
        });

        history.push('/login');

        return createdDoctor;
      })
      .catch(error => {
        dispatch({
          type: 'SUBMIT_MDINFO_ERROR'
        });
      });
  };
}
