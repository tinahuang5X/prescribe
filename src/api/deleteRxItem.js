export default function deleteRxItem(itemId) {
  console.log(itemId);
  return fetch(
    `https://api.airtable.com/v0/appWreDYfOK0lIvZM/Prescription/${itemId}`,
    {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer keyHJ1xR1rls6rSoR'
      }
    }
  )
    .then(response => response.json())
    .then(record => {
      return {
        deleted: true,
        id: record.id
      };
    });
}
