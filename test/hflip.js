'use strict';

import {hflip} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('hflip', function() {
	it('should flip a 3x3 array horizontally', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 3, 2, 1 ],
			[ 6, 5, 4 ],
			[ 9, 8, 7 ]
		];
		let output = hflip(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(expected);
	});
	it('should flip a 3x5 array horizontally', function() {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let expected = [
			[3, 2, 1],
			[6, 5, 4],
			[9, 8, 7],
			[12, 11, 10],
			[15, 14, 13]
		];
		let output = hflip(input);
		expect(output).to.equalArray(expected);
		expect(output).to.not.equal(input);
	});
	it('should flip a 4x3 array horizontally', function() {
		let input = [
			[ 1, 2, 3, 4 ],
			[ 5, 6, 7, 8 ],
			[ 9, 10, 11, 12 ]
		];
		let expected = [
			[ 4, 3, 2, 1 ],
			[ 8, 7, 6, 5 ],
			[ 12, 11, 10, 9 ]
		];
		let output = hflip(input);
		expect(output).to.equalArray(expected);
	});
	it('should flip a 5x6 array horizontally', function() {
		let input = [
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
			[11, 12, 13, 14, 15],
			[16, 17, 18, 19, 20],
			[21, 22, 23, 24, 25],
			[26, 27, 28, 29, 30]
		];
		let expected = [
			[5,4,3,2,1],
			[10,9,8,7,6],
			[15,14,13,12,11],
			[20,19,18,17,16],
			[25,24,23,22,21],
			[30,29,28,27,26]
		];
		let output = hflip(input);
		expect(output).to.equalArray(expected);
	});
	it('should not modify the original array(s)', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let backup = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let output = hflip(input);
		expect(input).to.equalArray(backup);
	});
	it('should preserve value types and object references', function() {
		let two = { 'id': 2 };
		let input = [
			[ '1', two, 3 ],
			[ 4, false, 6 ],
			[ true, 8, '9' ]
		];
		let expected = [
			[ 3, two, '1' ],
			[ 6, false, 4 ],
			[ '9', 8, true ]
		];
		let output = hflip(input);
		expect(output).to.equalArray(expected);
		expect(output[1][1]).to.be.a('boolean');
		expect(output[2][2]).to.be.a('boolean');
		expect(output[0][2]).to.be.a('string');
		expect(output[2][0]).to.be.a('string');
		expect(output[0][1]).to.be.a('object');
		expect(output[0][1]).to.equal(two);
		expect(output[0][1].id).to.equal(2);
	});
});