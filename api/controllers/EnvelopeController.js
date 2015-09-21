/**
 * EnvelopeController
 *
 * @description :: Server-side logic for managing envelopes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	name: {
    type: 'text',
    required: true,
    unique: true
  },
  goal: {
    type: 'float'
  },
  user: {
    model: 'user',
    required: true
  }
};

