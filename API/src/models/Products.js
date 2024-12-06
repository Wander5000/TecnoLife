const mongoose=require('mongoose');
const { Schema } = mongoose;
const Product = new Schema({
  name: String,
  price: Number,
  units: Number,
  image: String
});

module.exports=mongoose.model('Product', Product);