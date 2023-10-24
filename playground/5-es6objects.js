const name = 'Max';
const userAge = 29;
const user = {
  name, 
  age: userAge,
  location: 'Brussels',
};
console.log(user);
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

const { label: newNameLabel, stock, rating = 5 } = product;
console.log(newNameLabel);
console.log(stock);
console.log(rating); 

const transaction = (type, { label, stock }) => {
  console.log(type, label, stock);
};

transaction('order', product);