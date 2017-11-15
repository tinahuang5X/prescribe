import env from '../env';

export default function doctorSignup(doctorInfo, history) {
  console.log(doctorInfo);
  return fetch(`${env.API_BASE_URL}/doctors`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: doctorInfo.id,
      firstName: doctorInfo.firstName,
      lastName: doctorInfo.lastName,
      email: doctorInfo.email,
      password: doctorInfo.password
    })
  })
    .then(response => {
      console.log(response);
      if (response.status === 400) history.push('/');

      return response.text();
    })
    .then(record => {
      console.log(record);
      //localStorage.removeItem('message');
      localStorage.setItem('message', record);
      let storedMsg = localStorage.getItem('message');
      console.log(storedMsg);
      return {
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        token: record.token
      };
    });
}
