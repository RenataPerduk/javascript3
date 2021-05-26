const atTheOldToad = {
  potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
  updatePotionName(oldName, newName) {
    // Change code below this line
 let indexatTheOldToad = this.potions.indexOf(oldName);
    this.potions.splice(indexatTheOldToad,1,newName);
    // Change code above this line
  },
};
