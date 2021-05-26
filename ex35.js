const bookShelf = {
  books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
  updateBook(oldName, newName) {
    // Change code below this line
	let indexOfoldBook = this.books.indexOf(oldName);
    this.books.splice(indexOfoldBook,1,newName);
    // Change code above this line
  },
};