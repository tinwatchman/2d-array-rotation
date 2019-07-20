'use strict';

import {vflip} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('vflip', function() {
	it('should flip a 3x3 array vertically', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let expected = [
			[ 7, 8, 9 ],
			[ 4, 5, 6 ],
			[ 1, 2, 3 ]
		];
		let output = vflip(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(expected);
		expect(output).to.not.equal(input);
	});
	it('should flip a 3x5 array vertically', function() {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let expected = [
			[13, 14, 15],
			[10, 11, 12],
			[7, 8, 9],
			[4, 5, 6],
			[1, 2, 3]
		];
		let output = vflip(input);
		expect(output).to.equalArray(expected);
		expect(output).to.not.equal(input);
	});
	it('should flip a 5x6 array vertically', function() {
		let input = [
			[1, 2, 3, 4, 5],
			[6, 7, 8, 9, 10],
			[11, 12, 13, 14, 15],
			[16, 17, 18, 19, 20],
			[21, 22, 23, 24, 25],
			[26, 27, 28, 29, 30]
		];
		let expected = [
			[26, 27, 28, 29, 30],
			[21, 22, 23, 24, 25],
			[16, 17, 18, 19, 20],
			[11, 12, 13, 14, 15],
			[6, 7, 8, 9, 10],
			[1, 2, 3, 4, 5]
		];
		let output = vflip(input);
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
		let output = vflip(input);
		expect(input).to.equalArray(backup);
	});
	it('should copy the original rows', function() {
		let input = [
			[ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]
		];
		let output = vflip(input);
		for (let y=0; y<3; y++) {
			expect(output[y]).to.not.equal(input[y]);
		}
	});
	it('should preserve value types and object references', function() {
		let two = { 'id': 2 };
		let input = [
			[ '1', two, 3 ],
			[ 4, 5, 6 ],
			[ true, false, '9' ]
		];
		let expected = [
			[ true, false, '9' ],
			[ 4, 5, 6 ],
			[ '1', two, 3 ]
		];
		let output = vflip(input);
		expect(output).to.equalArray(expected);
		expect(output[0][0]).to.be.a('boolean');
		expect(output[0][1]).to.be.a('boolean');
		expect(output[0][2]).to.be.a('string');
		expect(output[2][0]).to.be.a('string');
		expect(output[2][1]).to.be.a('object');
		expect(output[2][1]).to.equal(two);
		expect(output[2][1].id).to.equal(2);
	});
});