import env from '../env';

export default function deleteRxItem(itemId) {
  console.log(itemId);
  return fetch(`${env.API_BASE_URL}/drugs/${itemId}`, {
    method: 'DELETE'
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(record => {
      console.log(record);
      return {
        deleted: true,
        id: record.id
      };
    });
}
