const Sequelize = require('sequelize')
const sequelize = require('../db')

export const Item = sequelize.define(
  'items', {
    id: {
      type: Sequelize.INTEGER,
      field: 'item_id'
    },
    title: {
      type: Sequelize.
    }
  }
)