export default function getRxItem(itemId) {
  return fetch(
    `https://api.airtable.com/v0/appWreDYfOK0lIvZM/Prescriptions/${itemId}`,
    {
      method: 'GET',
      headers: { Authorization: 'Bearer keyHJ1xR1rls6rSoR' }
    }
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
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
