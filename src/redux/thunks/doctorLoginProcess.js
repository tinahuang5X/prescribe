import doctorLogin from '../../api/doctorLogin';

export default function doctorLoginProcess(doctorInfo) {
  return (dispatch, getState) => {
    return doctorLogin(doctorInfo).then(doctorInfo => {
      localStorage.setItem('token', doctorInfo.token);
      dispatch({
        type: 'SUBMIT_LOGININFO',

        addedInfo: doctorInfo
      });
      return doctorInfo;
    });
  };
}
