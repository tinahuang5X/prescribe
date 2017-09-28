export default function getFilteredRxItems(filter) {
  //let filter = 'a';
  const filterVar =
    '&filterByFormula=' + encodeURI(`({generic} = '${filter}')`);

  // const filterVar = '&filterByFormula=' + encodeURI(`({generic} = 'a')`);

  console.log(filterVar);
  return fetch(
    `https://api.airtable.com/v0/appWreDYfOK0lIvZM/Prescriptions?${filterVar}`,
    {
      headers: { Authorization: 'Bearer keyHJ1xR1rls6rSoR' }
    }
  )
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
