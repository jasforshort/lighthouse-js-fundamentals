// list of directions in an array
const input = ['north', 'north', 'west', 'west', 'north', 'east','north'];  

const finalPosition = (moves) => {
  let x = 0;
  let y = 0;

  for(let i = 0; i < moves.length; i++){
    if (moves[i] === 'north') {
      y++;
    } else if (moves[i] === 'south') {
      y--;
    } else if (moves[i] === 'west') {
      x--;
    } else if (moves[i] === 'east') {
      x++;
    }
  }
  
  return [x,y];
};

// should get [-1, 4] as final position
console.log(finalPosition(input));