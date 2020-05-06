const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];


const finalPosition = moves => {
  let xPosition = 0;
  let yPosition = 0;

  for (const move of moves) {
    if (move === 'east') {
      xPosition++;
    } else if (move === 'west') {
      xPosition--;
    } else if (move === 'north') {
      yPosition++;
    } else if (move === 'south') {
      yPosition--;
    }
  }

  return [xPosition, yPosition];

}





console.log(finalPosition(moves));