import env from '../env';

export default function doctorSignup(doctorInfo) {
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
      return response.json();
    })
    .then(record => {
      console.log(record);
      return {
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        token: record.token
      };
    });
}
