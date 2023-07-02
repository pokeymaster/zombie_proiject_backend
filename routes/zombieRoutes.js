import express from 'express';
import { performMovements } from '../helpers/zombieHelper.js';


const router = express.Router();

router.post('/simulate', (req, res) => {
  const { gridSize: { width, height }, zombie, creatures, commands: commandString } = req.body;
  const commands = [...commandString];
  let remainingCreatures = [...creatures]; // Create a copy of the creatures array

  const { zombies, infected, logs } = performMovements({ width, height }, zombie, remainingCreatures, commands);

  // Remove infected creatures from remainingCreatures list
  remainingCreatures = remainingCreatures.filter(creature => !infected.some(inf => inf.x === creature.x && inf.y === creature.y));
  
  // Log movements and infections
  logs.forEach(log => console.log(log));

  res.json({ zombies, creatures: remainingCreatures });
});

export default router;
