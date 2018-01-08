import env from '../env';

export default function deletePatient(patientId) {
  console.log(patientId);
  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/patients/${patientId}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'JWT ' + storedToken,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(record => {
      console.log(record);
      return {
        deleted: true,
        id: record.id
      };
    });
}
