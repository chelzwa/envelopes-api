/**
 * TransactionController
 *
 * @description :: Server-side logic for managing transactions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	amount: {
    type: 'float',
    required: true
  },
  description: {
    type: 'text'
  },
  envelope: {
    model: 'envelope',
    required: true
  },
  repeats: {
    type: 'boolean',
    defaultsTo: false
  }
};

