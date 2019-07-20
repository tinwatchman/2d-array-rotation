'use strict';

import {mirrorTranspose} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('mirrorTranspose', () => {
	it('should work on a 3x3 array', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 3, 6, 9 ],
			[ 2, 5, 8 ],
			[ 1, 4, 7 ]
		];
		let output = mirrorTranspose(input);
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
			[3,6,9,12,15],
			[2,5,8,11,14],
			[1,4,7,10,13]
		];
		let output = mirrorTranspose(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 4x3 array', function() {
		let input = [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ]
		];
		let expected = [
			[4,8,12],
			[3,7,11],
			[2,6,10],
			[1,5,9]
		];
		let output = mirrorTranspose(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 5x3 array', function() {
		let input = [
			[ 1, 2, 3, 4, 5 ],
			[ 6, 7, 8, 9, 10 ],
			[ 11, 12, 13, 14, 15 ]
		];
		let expected = [
			[5,10,15],
			[4,9,14],
			[3,8,13],
			[2,7,12],
			[1,6,11]
		];
		let output = mirrorTranspose(input);
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
			[5,10,15,20,25,30],
			[4,9,14,19,24,29],
			[3,8,13,18,23,28],
			[2,7,12,17,22,27],
			[1,6,11,16,21,26]
		];
		let output = mirrorTranspose(input);
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
			[ 3, six, 9 ],
			[ 2, 5, 8 ],
			[ 1, 4, 7 ]
		];
		let output = mirrorTranspose(input);
		expect(output).to.equalArray(expected);
		expect(output[0][1]).to.be.a('object');
		expect(output[0][1]).to.equal(six);
		expect(output[0][1].id).to.equal(6);
	});
	it('should work with string and boolean values', function() {
		let input = [
			[ '1', '2', '3' ],
			[ '4', '5', '6' ],
			[ true, '8', false ]
		];
		let expected = [
			[ '3', '6', false ],
			[ '2', '5', '8' ],
			[ '1', '4', true ]
		];
		let output = mirrorTranspose(input);
		expect(output).to.equalArray(expected);
	});
});
