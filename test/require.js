'use strict';

import * as chai from 'chai';
import {expect} from 'chai';

/**
 * Test to make sure that standard `require` functionality still works.
 */

describe('umd functionality', function() {
	it('should work with standard node require', function() {
		const lib = require('../dist/2d-array-rotation');
		expect(lib).to.be.a('object');
		expect(lib.rotate90).to.be.a('function');
		expect(lib.rotate180).to.be.a('function');
		expect(lib.rotate270).to.be.a('function');
		expect(lib.rotate).to.be.a('function');
	});
	it('should allow access to specific functions', function() {
		const rotate90 = require('../dist/2d-array-rotation').rotate90;
		expect(rotate90).to.be.a('function');
	});
});