const Sequelize = require('sequelize');

const sequelize = require('../../../config/database');
const Category  = require('../Category/Category')


const tableName  = 'products';


const Product = sequelize.define('Product', {
name: {
  type: Sequelize.STRING
},
description: {
  type: Sequelize.TEXT,
},
price: {
  type: Sequelize.FLOAT,
}

}, {tableName});

Product.hasMany(Category, {through: 'ProductCategory'})
module.exports = Product;
