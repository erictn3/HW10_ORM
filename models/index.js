// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// activity 23 models/index look for .belongs to
// Categories have many Products

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});


Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'Product_id',
});

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

// Products belongToMany Tags (through ProductTag)
// activity 23 models/index look for .belongs to

// Tags belongToMany Products (through ProductTag)
// activity 23 models/index look for .belongs to

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
