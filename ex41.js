const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    if (this.potions.includes(potionName)) {
      return `Potion ${potionName} is already equipped!`;
    }

    this.potions.push(potionName);
  },
  removePotion(potionName) {
        const { potions } = this;
        for (let i = 0; i < potions.length; i += 1) {
            if (potionName === potions[i].name) {
                potions.splice(i, 1);
               }
        }
    },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion['name'] === oldName) {
      potion['name'] = newName;
      }
    }
    }
  // Change code above this line
};
