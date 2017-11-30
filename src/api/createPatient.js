import env from '../env';

export default function createpatient(patient) {
  let storedToken = localStorage.getItem('token');
  let storedId = localStorage.getItem('doctorId');
  console.log(storedToken, storedId);
  console.log(patient);
  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/patients`, {
    method: 'POST',
    headers: {
      Authorization: storedToken,
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
