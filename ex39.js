const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
    let indexAtTheOldToad = this.potions.indexOf(potionName);
    this.potions.splice(indexAtTheOldToad, 1);
    // Change code above this line
  },
};