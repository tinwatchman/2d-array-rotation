'use strict';

import {rotate90CW, rotate180CW, rotate270CW} from "../2d-array-rotation.js";
import {transpose, mirror, mirrorTranspose} from "../2d-array-rotation.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

describe('wrapper functions', () => {
	describe('rotate90CW', () => {
		it('should just be a wrapper around transpose', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate90CW(input);
			let output2 = transpose(input);
			expect(output).to.be.a('array');
			expect(output).to.equalArray(output2);
		});
	});
	describe('rotate180CW', () => {
		it('should just be a wrapper around mirror', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate180CW(input);
			let output2 = mirror(input);
			expect(output).to.be.a('array');
			expect(output).to.equalArray(output2);
		});
	});
	describe('rotate270CW', () => {
		it('should just be a wrapper around mirrorTranspose', () => {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = rotate270CW(input);
			let output2 = mirrorTranspose(input);
			expect(output).to.be.a('array');
			expect(output).to.equalArray(output2);
		});
	});	
});