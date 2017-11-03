import env from '../env';

export default function getRxItems() {
  let storedToken = localStorage.getItem('token');
  let storedId = localStorage.getItem('doctorId');
  console.log(storedToken, storedId);

  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/drugs`, {
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
        id: record.id,
        doctorId: record.doctorId,
        generic: record.generic,
        brand: record.brand,
        indications: record.indications
        //dosage: record.fields.dosage,
        //sideeffects: record.fields.sideeffects
      }));
    });
  // .then(messages => {
  //   console.log(messages);
  // });
}
