export default function getRxItems() {
  return fetch('./data/Rx-items.json').then(response => response.json());
}
