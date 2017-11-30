import env from '../env';

export default function deletePatient(patientId) {
  console.log(patientId);
  return fetch(`${env.API_BASE_URL}/patients/${patientId}`, {
    method: 'DELETE'
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
