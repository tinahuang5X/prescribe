import env from '../env';

export default function updateRxitem(itemId, item, change) {
  console.log(itemId, item, change);
  return fetch(`${env.API_BASE_URL}/drugs/${itemId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
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
