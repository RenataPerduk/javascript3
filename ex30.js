function makeTask(data) {
  const completed = false;
  const category = 'General';
  const priority = 'Normal';
  // Change code below this line
return {category, priority, ...data, completed }
  // Change code above this line
}