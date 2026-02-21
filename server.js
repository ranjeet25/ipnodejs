const express = require('express');
const logger = require('./middleware/logger');

const app = express();
const port = 3000;

app.use(logger); // Use the logger middleware for all routes

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  { id: 3, name: 'Product 3', price: 30 },
];

const product123 = { id: 123, name: 'Product 123', price: 123 };

// Get all products
app.get('/products', (req, res) => {

    // get query parameter sort
    const sort = req.query.sort;
    console.log(sort);
    res.send(products);
}               
);

// Dynamic route - path parameter
app.get('/products/:id', (req, res) => {

 // get path parameter id
  const id = req.params.id; 
  console.log(id);

  if (id == 123) {
    res.send(product123);
  } else {
    res.send({ message: 'Product not found' });
  } 
}               
);







app.post('/login', (req, res) => {
  res.send('this is login route');
  //res.redirect('/products');
}       
);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});