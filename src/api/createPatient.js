import env from '../env';
const jwt = require('jsonwebtoken');
export default function createPatient(patient) {
  let storedToken = localStorage.getItem('token');
  let decodedToken = jwt.decode(storedToken);

  let storedId = decodedToken.identity;
  console.log(storedToken, storedId);
  console.log(patient);

  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/patients`, {
    method: 'POST',
    headers: {
      Authorization: 'JWT ' + storedToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: patient.name,
      dob: patient.dob,
      phone: patient.phone,
      address: patient.address
    })
  })
    .then(response => response.json())
    .then(record => {
      console.log(record);
      return {
        id: record.id,
        doctorId: record.doctorId,
        name: record.name,
        dob: record.dob,
        phone: record.phone,
        address: record.address
      };
    });
}
