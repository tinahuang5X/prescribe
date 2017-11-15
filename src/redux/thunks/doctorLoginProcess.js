import doctorLogin from '../../api/doctorLogin';

export default function doctorLoginProcess(doctorInfo, history) {
  return (dispatch, getState) => {
    //localStorage.clear();
    return doctorLogin(doctorInfo, history).then(doctorInfo => {
      localStorage.setItem('token', doctorInfo.token);
      localStorage.setItem('doctorId', doctorInfo.id);
      let storedToken = localStorage.getItem('token');
      let storedId = localStorage.getItem('doctorId');
      console.log(storedToken, storedId);
      dispatch({
        type: 'SUBMIT_LOGININFO',

        addedInfo: doctorInfo
      });
      return doctorInfo;
    });
  };
}
