export default function updateRxitem(itemId, change) {
  console.log(itemId, change);
  return fetch(
    `https://api.airtable.com/v0/appWreDYfOK0lIvZM/Prescription/${itemId}`,
    {
      method: 'PATCH',
      headers: {
        Authorization: 'Bearer keyHJ1xR1rls6rSoR',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ fields: change })
    }
  )
    .then(response => response.json())
    .then(record => {
      console.log(record);
      return {
        id: record.id,
        generic: record.fields.generic,
        brand: record.fields.brand,
        indications: record.fields.indications,
        dosage: record.fields.dosage,
        sideeffects: record.fields.sideeffects
      };
    });
}
