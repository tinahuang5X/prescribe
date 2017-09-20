export default function getRxItems() {
  return fetch('https://api.airtable.com/v0/appWreDYfOK0lIvZM/Prescriptions', {
    headers: { Authorization: 'Bearer keyHJ1xR1rls6rSoR' }
  })
    .then(response => response.json())
    .then(data =>
      data.records.map(record => ({
        id: record.id,
        generic: record.fields.generic,
        brand: record.fields.brand,
        indications: record.fields.indications,
        dosage: record.fields.dosage,
        sideeffects: record.fields.sideeffects
      }))
    );
  // .then(messages => {
  //   console.log(messages);
  // });
}
