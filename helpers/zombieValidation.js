export function isValidPosition(gridSize, position) {
  return position.x >= 0 && position.x < gridSize && position.y >= 0 && position.y < gridSize;
}