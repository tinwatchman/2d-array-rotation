'use strict';

import {mirror} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('mirror', () => {
	it('should work on a 3x3 array', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 9, 8, 7 ],
			[ 6, 5, 4 ],
			[ 3, 2, 1 ]
		];
		let output = mirror(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(expected);
	});
	it('should work on a 3x5 array', function() {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let expected = [
			[15,14,13],
			[12,11,10],
			[9,8,7],
			[6,5,4],
			[3,2,1]
		];
		let output = mirror(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 4x3 array', function() {
		let input = [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ]
		];
		let expected = [
			[12,11,10,9],
			[8,7,6,5],
			[4,3,2,1]
		];
		let output = mirror(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 5x3 array', function() {
		let input = [
			[ 1, 2, 3, 4, 5 ],
			[ 6, 7, 8, 9, 10 ],
			[ 11, 12, 13, 14, 15 ]
		];
		let expected = [
			[15,14,13,12,11],
			[10,9,8,7,6],
			[5,4,3,2,1]
		];
		let output = mirror(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 5x6 array', function() {
		let input = [
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
			[11, 12, 13, 14, 15],
			[16, 17, 18, 19, 20],
			[21, 22, 23, 24, 25],
			[26, 27, 28, 29, 30]
		];
		let expected = [
			[30,29,28,27,26],
			[25,24,23,22,21],
			[20,19,18,17,16],
			[15,14,13,12,11],
			[10,9,8,7,6],
			[5,4,3,2,1]
		];
		let output = mirror(input);
		expect(output).to.equalArray(expected);
	});
	it('should preserve object references', function() {
		const six = { 'id': 6 };
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, six ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 9, 8, 7 ],
			[ six, 5, 4 ],
			[ 3, 2, 1 ]
		];
		let output = mirror(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(expected);
		expect(output[1][0]).to.be.a('object');
		expect(output[1][0]).to.equal(six);
		expect(output[1][0].id).to.equal(6);
	});
	it('should work with string and boolean values', function() {
		let input = [
			[ '1', '2', '3' ],
			[ '4', '5', '6' ],
			[ true, '8', false ]
		];
		let expected = [
			[ false, '8', true ],
			[ '6', '5', '4' ],
			[ '3', '2', '1' ]
		];
		let output = mirror(input);
		expect(output).to.equalArray(expected);
	});
});