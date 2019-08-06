'use strict';

import {rotate} from "../2d-array-rotation.js";
import {rotate90, rotate180, rotate270} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('rotate', () => {
	it('should return rotate90 result when rotating by 90 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 90);
		let output2 = rotate90(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(output2);
	});
	it('should return rotate180 result when rotating by 180 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 180);
		let output2 = rotate180(input);
		expect(output).to.equalArray(output2);
	});
	it('should return rotate270 result when rotating by 270 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 270);
		let output2 = rotate270(input);
		expect(output).to.equalArray(output2);
	});
	it('should return rotate270 result when rotating by -90 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, -90);
		let output2 = rotate270(input);
		expect(output).to.equalArray(output2);
	});
	it('should return rotate90 result when rotating by -270 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, -270);
		let output2 = rotate90(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(output2);
	});
	describe('should throw an error when given a non-right angle', () => {
		it('via test functions', () => {
			let test = function() {
				let input = [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[10, 11, 12],
					[13, 14, 15]
				];
				return rotate(input, 45);
			};
			let test2 = function() {
				let input = [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[10, 11, 12],
					[13, 14, 15]
				];
				return rotate(input, 30);
			};
			expect(test).to.throw;
			expect(test2).to.throw;
		});
		it('via try-catch', () => {
			// and one more time, to make sure nyc gets it
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9]
			];
			let output = null;
			let err = null;
			try {
				output = rotate(input, 20);
			} catch (e) {
				err = e;
			}
			expect(output).to.be.null;
			expect(err).not.to.be.null;
		});
	});
	it('should return the original array if 0 degrees given', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 0);
		expect(input).to.equal(output);
	});
	describe('should be able to handle degrees higher than 360', function() {
		it('450 degrees', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate(input, 450);
			let output2 = rotate90(input);
			expect(output).to.equalArray(output2);
		});
		it('900 degrees', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate(input, 900);
			let output2 = rotate180(input);
			expect(output).to.equalArray(output2);
		});
		it('990 degrees', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate(input, 990);
			let output2 = rotate270(input);
			expect(output).to.equalArray(output2);
		});
	});
	describe('should be able to handle degrees lower than -360', function() {
		it('-450 degrees', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate(input, -450);
			let output2 = rotate270(input);
			expect(output).to.equalArray(output2);
		});
		it('-900 degrees', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate(input, -900);
			let output2 = rotate180(input);
			expect(output).to.equalArray(output2);
		});
		it('-990 degrees', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate(input, -990);
			let output2 = rotate90(input);
			expect(output).to.equalArray(output2);
		});
	});
});