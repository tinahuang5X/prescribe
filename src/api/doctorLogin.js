import env from '../env';

export default function doctorLogin(doctorInfo) {
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
      return response.json();
    })
    .then(record => {
      console.log(record);
      //localStorage.setItem('token', record.token);
      //localStorage.setItem('doctorId', record.id);

      return {
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        token: record.token
      };
    });
}
