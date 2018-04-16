import env from '../env';

export default function doctorLogin(doctorInfo) {
  console.log(doctorInfo);

  return fetch(`${env.API_BASE_URL}/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: doctorInfo.email,
      password: doctorInfo.password
    })
  })
    .then(response => {
      console.log(response);
      if (response.status === 400) {
        throw new Error('HTTP_400');
      }

      return response.json();
    })
    .then(record => {
      console.log(record.access_token);

      return {
        id: record.id,
        firstName: record.firstName,
        lastName: record.lastName,
        email: record.email,
        token: record.access_token
      };
    });
}
