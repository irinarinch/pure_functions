import getHealthStatus from '../health';

const dataList = [
  ['green', { name: 'Маг', health: 90 }, 'healthy'],
  ['yellow', { name: 'Маг', health: 50 }, 'wounded'],
  ['red', { name: 'Маг', health: 10 }, 'critical'],
];

const handler = test.each(dataList);
handler('testing health status indicator %s', (_, character, expected) => {
  const result = getHealthStatus(character);
  expect(result).toBe(expected);
});
