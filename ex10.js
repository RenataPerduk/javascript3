const apartment = {
  descr: 'Spacious apartment in the city centre',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for(key in apartment){
	keys.push(key);
  	values.push(apartment[key])
}