import env from '../env';

export default function updatePatient(patientId, patient, change) {
  console.log(patientId, patient, change);
  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/patients/${patientId}`, {
    method: 'PATCH',
    headers: {
      Authorization: 'JWT ' + storedToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(change)
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
