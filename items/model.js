const Sequelize = require('sequelize')
const sequelize = require('../db')
const Seller = require('../sellers/model')

const Item = sequelize.define('items', {
  id: {
    type: Sequelize.INTEGER,
    field: 'item_id',
    primaryKey: true,
    allowNull: false
  },
  title: {
    type: Sequelize.STRING,
    field: 'title',
    allowNull: false
  },
  photo: {
    type: Sequelize.TEXT,
    field: 'photo_url'
  },
  price: {
    type: Sequelize.DECIMAL,
    field: 'price',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    field: 'description'
  },
  sellerId: {
    type: Sequelize.INTEGER,
    field: 'seller_id'
  }
}, {
  tableName: 'items'
})

Item.belongsTo(Seller)

Item.sync()

module.exports = Item