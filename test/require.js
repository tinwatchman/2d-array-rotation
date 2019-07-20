'use strict';

import * as chai from 'chai';
import {expect} from 'chai';

/**
 * Tests to make sure that standard `require` functionality still works, just
 * because I'm paranoid like that.
 */

describe('umd functionality', function() {
	it('should work with standard node require', function() {
		const lib = require('../dist/2d-array-rotation');
		expect(lib).to.be.a('object');
		expect(lib.transpose).to.be.a('function');
		expect(lib.mirror).to.be.a('function');
		expect(lib.rotate).to.be.a('function');
	});
	it('should allow access to specific functions', function() {
		const transpose = require('../dist/2d-array-rotation').transpose;
		expect(transpose).to.be.a('function');
	});
});