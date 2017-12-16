import doctorLogin from '../../api/doctorLogin';

export default function doctorLoginProcess(doctorInfo, history) {
  return (dispatch, getState) => {
    return doctorLogin(doctorInfo, history)
      .then(doctorInfo => {
        dispatch({
          type: 'SUBMIT_LOGININFO',

          addedInfo: doctorInfo
        });

        localStorage.setItem('token', doctorInfo.token);
        localStorage.setItem('doctorId', doctorInfo.id);
        localStorage.setItem('firstName', doctorInfo.firstName);
        localStorage.setItem('lastName', doctorInfo.lastName);

        let storedToken = localStorage.getItem('token');
        let storedId = localStorage.getItem('doctorId');
        console.log(storedToken, storedId, doctorInfo);
        history.push('/drugs');
        return doctorInfo;
      })
      .catch(error => {
        dispatch({
          type: 'SUBMIT_LOGININFO_ERROR'
        });
      });
  };
}
