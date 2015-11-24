var actionUtil = require('sails/lib/hooks/blueprints/actionUtil');

/**
 * EnvelopeController
 *
 * @description :: Server-side logic for managing envelopes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	create: function(req, res) {
		//Set the user that made the request 
		//on the envelope before saving it
		var envelope = actionUtil.parseValues(req);
		envelope.user = req.user.id;
		Envelope.create(envelope)
			.then(function(envelope) {
				res.send(envelope);
			});
	}
};
