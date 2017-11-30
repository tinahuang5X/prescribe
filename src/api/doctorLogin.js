import env from '../env';

export default function doctorLogin(doctorInfo, history) {
  console.log(doctorInfo);
  //localStorage.clear();
  //localStorage.removeItem('token');
  //localStorage.removeItem('doctorId');
  return fetch(`${env.API_BASE_URL}/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: doctorInfo.email,
      password: doctorInfo.password
    })
  })
    .then(response => {
      console.log(response);
      if (response.status === 400) {
        localStorage.setItem('message', 'Wrong email or password.');

        let storedMsg = localStorage.getItem('message');
        console.log(storedMsg);
        //if (storedMsg === 'Wrong email or password.') history.push('/login');

        //console.log(response.statusText);
      }
      return response.json();
    })
    .then(record => {
      console.log(record);
      localStorage.removeItem('message');
      localStorage.setItem('token', record.token);
      localStorage.setItem('doctorId', record.id);
      let storedToken = localStorage.getItem('token');
      let storedId = localStorage.getItem('doctorId');
      console.log(storedToken, storedId);
      history.push('/patients');
      return {
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        token: record.token
      };
    });
}
