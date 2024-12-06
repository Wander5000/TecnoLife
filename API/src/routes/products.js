const express= require('express');
const router = express.Router();
const Products = require('../models/Products');

router.get('/products', async (req, res) => {
  const products = await Products.find();
  res.json(products);
});

router.get('/products/:id', async (req, res) => {
  const products = await Products.findById(req.params.id);
  res.json(products);
});

router.get('/products/:id/price', async (req, res) => {
  const products = await Products.findById(req.params.id, {price: 1});
    res.json(products);
});

router.post('/products', async (req, res) => {
  let product = new Products(req.body);
  await product.save();
  console.log(product);
  res.json({
    status:'Se ha creado un nuevo producto'
  });
});

router.put('/products/:id', async (req, res) => {
  await  Products.findByIdAndUpdate(req.params.id, req.body);
  res.json({
      status:'Se actualizo el producto'
    });
  });

router.delete('/products/:id', async (req, res) => {
  await  Products.findByIdAndDelete(req.params.id);
    res.json({
      status:'Se elimino el producto'
    });
  });

module.exports = router;