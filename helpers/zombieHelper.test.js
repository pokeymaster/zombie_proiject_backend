const { performMovements } = require('./zombieHelper');

test('performMovements works correctly', () => {
  // setup your input data
  const gridSize = { width: 5, height: 5 };
  const zombie = { x: 0, y: 0, id: 0, commandIndex: 0 };
  const creatures = [{ x: 1, y: 0 }, { x: 2, y: 0 }];
  const commands = ['R', 'R'];

  // call your function with the input data
  const result = performMovements(gridSize, zombie, creatures, commands);

  // make assertions about the result
  expect(result.zombies.length).toBe(3);
  expect(result.creatures.length).toBe(0);
  // ... add more assertions as needed ...
});
