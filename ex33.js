// Change code below this line
function findMatches(numbers,...args) {
  const matches = []; // Don't change this line
for(const arg of args){
 if (numbers.includes(arg)){
   matches.push(arg)
}
}
  // Change code above this line
  return matches;
}