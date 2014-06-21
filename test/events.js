'use strict';


var jsdom = require('jsdom').jsdom,
	assert = require('assert'),
	events = require('../lib/events');



describe('Events', function () {

	var document;


	beforeEach(function () {
		document = jsdom('<html><head></head><body>hello world</body></html>');
	});

});