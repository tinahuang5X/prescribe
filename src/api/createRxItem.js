export default function createRxItem(RxItem) {
  console.log(RxItem);
  return fetch('https://api.airtable.com/v0/appWreDYfOK0lIvZM/Prescriptions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer keyHJ1xR1rls6rSoR',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fields: {
        generic: RxItem.generic,
        brand: RxItem.brand,
        indications: RxItem.indications,
        dosage: RxItem.dosage,
        sideeffects: RxItem.sideeffects
      }
    })
  })
    .then(response => response.json())
    .then(record => {
      console.log(record);
      return {
        id: record.id,
        generic: record.fields.generic,
        brand: record.fields.brand,
        indications: record.fields.indications,
        dosage: record.fields.dosage
        //sideeffects: record.fields.sideeffects
      };
    });
}
