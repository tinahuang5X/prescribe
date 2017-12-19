import env from '../env';
const jwt = require('jsonwebtoken');
export default function getPatients() {
  let storedToken = localStorage.getItem('token');
  let decodedToken = jwt.decode(storedToken);
  //console.log(storedToken, decodedToken);
  let storedId = decodedToken.identity;

  console.log(storedToken, storedId);

  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/patients`, {
    method: 'GET',
    headers: {
      Authorization: 'JWT ' + storedToken,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(records => {
      console.log(records);
      if (records.error === 'Invalid token') return 'UNAUTHORIZED';
      else
        return records.map(record => ({
          // .then(record => {
          //   console.log(record);
          //   return {
          id: record.id,
          doctorId: record.doctorId,
          name: record.name,
          dob: record.dob,
          phone: record.phone,
          address: record.address
        }));
    });
}
