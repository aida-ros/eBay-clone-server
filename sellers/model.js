const Sequelize = require('sequelize')
const sequelize = require('../db')

const Seller = sequelize.define('sellers', {
  id: {
    type: Sequelize.INTEGER,
    field: 'seller_id',
    primaryKey: true,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    field: 'user_name',
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    field: 'email',
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    field: 'phone_number',
    allowNull: false
  }
})

Seller.sync()

module.exports = Seller