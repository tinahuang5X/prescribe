import env from '../env';

export default function getPatients() {
  let storedToken = localStorage.getItem('token');
  let storedId = localStorage.getItem('doctorId');
  console.log(storedToken, storedId);

  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/patients`, {
    method: 'GET',
    headers: {
      Authorization: storedToken,
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(records => {
      console.log(records);

      return records.map(record => ({
        // .then(record => {
        //   console.log(record);
        //   return {
        id: record.id,
        doctorId: record.doctorId,
        name: record.name,
        dob: record.dob
        // phone: record.phone,
        // address: record.address
      }));
    });
}
