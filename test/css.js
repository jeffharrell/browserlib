'use strict';


var jsdom = require('jsdom').jsdom,
	assert = require('assert'),
	css = require('../lib/css');



describe('CSS', function () {

	var document;


	beforeEach(function () {
		document = jsdom('<html><head></head><body class="foo">hello world</body></html>');
	});


	it('Should add CSS classes to elements', function () {
		css.add(document.body, 'addme');
		assert(~document.body.className.indexOf('addme'));
	});


	it('Should remove CSS classes from elements', function () {
		css.add(document.body, 'removeme');
		css.remove(document.body, 'removeme');
		assert(document.body.className.indexOf('removeme') === -1);
	});


	it('Should preserve existing classes', function () {
		css.add(document.body, 'bar');
		css.add(document.body, 'baz');
		css.remove(document.body, 'bar');
		css.remove(document.body, 'baz');
		assert(~document.body.className.indexOf('foo'));
	});


	it('Should inject <style> elements', function () {
		var style = '.myclass { background: blue; }';

		global.document = document;

		css.inject(document.head, style);
		assert(document.head.getElementsByTagName('style')[0].textContent === style);

		delete global.document;
	});

});