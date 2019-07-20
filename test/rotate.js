'use strict';

import {rotate} from "../2d-array-rotation.js";
import {transpose, mirror, mirrorTranspose} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('rotate', () => {
	it('should return transpose result when rotating by 90 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 90);
		let output2 = transpose(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(output2);
	});
	it('should return mirror result when rotating by 180 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 180);
		let output2 = mirror(input);
		expect(output).to.equalArray(output2);
	});
	it('should return mirrorTranspose result when rotating by 270 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, 270);
		let output2 = mirrorTranspose(input);
		expect(output).to.equalArray(output2);
	});
	it('should return mirrorTranspose result when rotating by -90 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, -90);
		let output2 = mirrorTranspose(input);
		expect(output).to.equalArray(output2);
	});
	it('should return transpose result when rotating by -270 degrees', () => {
		let input = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[10, 11, 12],
			[13, 14, 15]
		];
		let output = rotate(input, -270);
		let output2 = transpose(input);
		expect(output).to.be.a('array');
		expect(output).to.equalArray(output2);
	});
	it('should throw an error when given a non-right angle', () => {
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
			let output2 = transpose(input);
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
			let output2 = mirror(input);
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
			let output2 = mirrorTranspose(input);
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
			let output2 = mirrorTranspose(input);
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
			let output2 = mirror(input);
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
			let output2 = transpose(input);
			expect(output).to.equalArray(output2);
		});
	});
});