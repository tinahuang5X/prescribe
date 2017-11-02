import env from '../env';

export default function createRxItem(RxItem) {
  console.log(RxItem);
  return fetch(`${env.API_BASE_URL}/doctors/1/drugs`, {
    method: 'POST',
    headers: {
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
