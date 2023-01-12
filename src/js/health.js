const indicator = {
  green: {
    health: 100,
    status: 'healthy',
  },
  yellow: {
    health: 50,
    status: 'wounded',
  },
  red: {
    health: 15,
    status: 'critical',
  },
};

export default function getHealthStatus(character) {
  if (character.health > indicator.yellow.health) {
    return indicator.green.status;
  }
  if (character.health < indicator.red.health) {
    return indicator.red.status;
  }
  return indicator.yellow.status;
}
