import env from '../env';
const jwt = require('jsonwebtoken');
export default function createRxItem(RxItem) {
  let storedToken = localStorage.getItem('token');
  let decodedToken = jwt.decode(storedToken);

  let storedId = decodedToken.identity;

  console.log(storedToken, storedId);
  console.log(RxItem);

  return fetch(`${env.API_BASE_URL}/doctors/${storedId}/drugs`, {
    method: 'POST',
    headers: {
      Authorization: 'JWT ' + storedToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      generic: RxItem.generic,
      brand: RxItem.brand,
      indications: RxItem.indications
    })
  })
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(record => {
      console.log(record);
      return {
        id: record.id,
        doctorId: record.doctorId,
        generic: record.generic,
        brand: record.brand,
        indications: record.indications
      };
    });
}
