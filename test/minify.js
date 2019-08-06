'use strict';

import * as min from "../dist/2d-array-rotation.min.js";
import * as chai from 'chai';
import {expect} from 'chai';
chai.use(require("./helpers/equal-array"));

/**
 * A few tests to make sure the minified version is up to snuff
 */

describe('minified version', function() {
	describe('rotate90', function() {
		it('exists', function() {
			expect(min.rotate90).to.be.a('function');
		});
		it('works', function() {
			let input = [
				[ 1, 2, 3 ],
				[ 4, 5, 6 ],
				[ 7, 8, 9 ]
			];
			let output = min.rotate90(input);
			expect(output).to.equalArray([
				[ 7, 4, 1 ],
				[ 8, 5, 2 ],
				[ 9, 6, 3 ]
			]);
		});
	});
	describe('rotate180', function() {
		it('exists', function() {
			expect(min.rotate180).to.be.a('function');
		});
		it('works', function() {
			let input = [
				[1, 2, 3],
				[4, 5, 6],
				[7, 8, 9],
				[10, 11, 12],
				[13, 14, 15]
			];
			let output = min.rotate180(input);
			expect(output).to.equalArray([
				[15,14,13],
				[12,11,10],
				[9,8,7],
				[6,5,4],
				[3,2,1]
			]);
		});
	});
	describe('rotate270', function() {
		it('exists', function() {
			expect(min.rotate270).to.be.a('function');
		});
		it('works', function() {
			let input = [
				[ 1, 2, 3 ],
				[ 4, 5, 6 ],
				[ 7, 8, 9 ]
			];
			let output = min.rotate270(input);
			expect(output).to.equalArray([
				[ 3, 6, 9 ],
				[ 2, 5, 8 ],
				[ 1, 4, 7 ]
			]);
		});
	});
	describe('other functions', function() {
		it('rotate exists', () => {
			expect(min.rotate).to.be.a('function');
		});
		it('hflip exists', () => {
			expect(min.hflip).to.be.a('function');
		});
		it('vflip exists', () => {
			expect(min.vflip).to.be.a('function');
		});
	});
});
