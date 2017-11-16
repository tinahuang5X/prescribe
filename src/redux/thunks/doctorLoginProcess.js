import doctorLogin from '../../api/doctorLogin';

export default function doctorLoginProcess(doctorInfo, history) {
  return (dispatch, getState) => {
    return doctorLogin(doctorInfo, history).then(doctorInfo => {
      dispatch({
        type: 'SUBMIT_LOGININFO',

        addedInfo: doctorInfo
      });
      return doctorInfo;
    });
  };
}
