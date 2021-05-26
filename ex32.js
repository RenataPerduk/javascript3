// Change code below this line
function addOverNum(values,...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > values){
    total += arg;
  }
  }
  return total;
  // Change code above this line
}