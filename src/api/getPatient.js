import env from '../env';

export default function getPatient(patientId) {
  let storedToken = localStorage.getItem('token');
  let storedId = localStorage.getItem('doctorId');
  console.log(storedToken, storedId, patientId);

  return fetch(
    `${env.API_BASE_URL}/doctors/${storedId}/patients/${patientId}`,
    {
      method: 'GET',
      headers: {
        Authorization: storedToken,
        'Content-Type': 'application/json'
      }
    }
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(record => {
      console.log(record.id, patientId);
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
