const { Model } = require('objection');

class Order extends Model {
  static get tableName() {
    return 'order';
  }
}

module.exports = Order;
