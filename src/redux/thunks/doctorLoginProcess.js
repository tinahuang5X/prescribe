import doctorLogin from '../../api/doctorLogin';

export default function doctorLoginProcess(doctorInfo) {
  return (dispatch, getState) => {
    //localStorage.clear();
    return doctorLogin(doctorInfo).then(doctorInfo => {
      localStorage.removeItem('token');
      localStorage.removeItem('doctorId');
      localStorage.setItem('token', doctorInfo.token);
      localStorage.setItem('doctorId', doctorInfo.id);
      dispatch({
        type: 'SUBMIT_LOGININFO',

        addedInfo: doctorInfo
      });
      return doctorInfo;
    });
  };
}
