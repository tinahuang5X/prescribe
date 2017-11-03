import env from '../env';

export default function createRxItem(RxItem) {
  let storedToken = localStorage.getItem('token');
  let storedId = localStorage.getItem('doctorId');
  console.log(storedToken, storedId);
  console.log(RxItem);
  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/drugs`, {
    method: 'POST',
    headers: {
      Authorization: storedToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      generic: RxItem.generic,
      brand: RxItem.brand,
      indications: RxItem.indications
      //dosage: RxItem.dosage,
      //sideeffects: RxItem.sideeffects
    })
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
