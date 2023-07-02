export function performMovements(gridSize, zombie, creatures, commands) {
    const dx = { 'U': 0, 'D': 0, 'L': -1, 'R': 1 };
    const dy = { 'U': -1, 'D': 1, 'L': 0, 'R': 0 };
  
    let zombies = [{ ...zombie, id: 0, commandIndex: 0 }];
    let infected = [];
    let logs = [];
  
    while (true) {
      let newZombies = [];
      let movedZombies = [];
  
      for (const z of zombies) {
        if (z.commandIndex >= commands.length) {
          continue;
        }
  
        const command = commands[z.commandIndex];
        let x = (z.x + dx[command] + gridSize.width) % gridSize.width;
        let y = (z.y + dy[command] + gridSize.height) % gridSize.height;
  
        const index = creatures.findIndex(c => c.x === x && c.y === y);
  
        z.x = x;
        z.y = y;
        z.commandIndex++;
  
        logs.push(`zombie ${z.id} moved to (${x},${y})`);
        if (index !== -1) {
            const newZombie = { x, y, id: zombies.length, commandIndex: 0 };
            newZombies.push(newZombie);
            infected.push(creatures[index]);
            creatures.splice(index, 1);
            logs.push(`zombie ${z.id} infected creature at (${x},${y})`);
        }
        movedZombies.push(z);
      }
  
      if (newZombies.length === 0 && movedZombies.every(z => z.commandIndex >= commands.length)) {
        break;
      }
  
      zombies = zombies.concat(newZombies);
    }
  
    return { zombies, creatures, logs, infected };
  }
  