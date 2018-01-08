import env from '../env';

export default function updateRxItem(itemId, item, change) {
  console.log(itemId, item, change);
  let storedToken = localStorage.getItem('token');
  return fetch(`${env.API_BASE_URL}/drugs/${itemId}`, {
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
        generic: record.generic,
        brand: record.brand,
        indications: record.indications
        //dosage: record.fields.dosage
        //sideeffects: record.fields.sideeffects
      };
    });
}
