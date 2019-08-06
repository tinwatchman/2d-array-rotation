'use strict';

import {rotate90} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('rotate90', () => {
	it('should work on a 3x3 array', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 7, 4, 1 ],
			[ 8, 5, 2 ],
			[ 9, 6, 3 ]
		];
		let output = rotate90(input);
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
			[13, 10, 7, 4, 1],
			[14, 11, 8, 5, 2],
			[15, 12, 9, 6, 3]
		];
		let output = rotate90(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 4x3 array', function() {
		let input = [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ]
		];
		let expected = [
			[ 9, 5, 1 ],
			[10, 6, 2 ],
			[11, 7, 3 ],
			[12, 8, 4 ]
		];
		let output = rotate90(input);
		expect(output).to.equalArray(expected);
	});
	it('should work on a 5x3 array', function() {
		let input = [
			[ 1, 2, 3, 4, 5 ],
			[ 6, 7, 8, 9, 10 ],
			[ 11, 12, 13, 14, 15 ]
		];
		let expected = [
			[11, 6, 1],
			[12, 7, 2],
			[13, 8, 3],
			[14, 9, 4],
			[15, 10, 5]
		];
		let output = rotate90(input);
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
			[26,21,16,11,6,1],
			[27,22,17,12,7,2],
			[28,23,18,13,8,3],
			[29,24,19,14,9,4],
			[30,25,20,15,10,5]
		];
		let output = rotate90(input);
		expect(output).to.equalArray(expected);
	});
	it('should preserve object references', function() {
		let six = { 'id': 6 };
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, six ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 7, 4, 1 ],
			[ 8, 5, 2 ],
			[ 9, six, 3 ]
		];
		let output = rotate90(input);
		expect(output).to.equalArray(expected);
		expect(output[2][1]).to.be.a('object');
		expect(output[2][1]).to.equal(six);
	});
	it('should work with string and boolean values', function() {
		let input = [
			['1', '2', '3'],
			['4', '5', '6'],
			['7', '8', '9'],
			['10', '11', '12'],
			[true, '14', false]
		];
		let expected = [
			[true, '10', '7', '4', '1'],
			['14', '11', '8', '5', '2'],
			[false, '12', '9', '6', '3']
		];
		let output = rotate90(input);
		expect(output).to.equalArray(expected);
	});
});