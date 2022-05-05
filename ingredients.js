const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log('Here are all the ingredients using a while loop:');

let wloop = 0;
while (wloop < ingredients.length) {
  console.log(ingredients[wloop]);
  wloop++;
}

// Write a for loop that prints out the contents of ingredients:
console.log('\nHere are all the ingredients using a for loop:');

for (let floop = 0; floop < ingredients.length; floop++) {
  console.log(ingredients[floop]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('\nHere are all the ingredients in reverse order:');

for (let rloop = ingredients.length - 1; rloop >= 0; rloop--) {
  console.log(ingredients[rloop]);
}