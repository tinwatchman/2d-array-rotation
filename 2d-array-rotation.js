'use strict';

/**
 * Rotates the given array 90 degrees clockwise.
 * @param  {Array} a two-dimensional array
 * @return {Array}   2d array representing a rotated version of the input
 */
export function rotate90(a) {
	const w = a.length;
	const h = a[0].length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		b[y] = new Array(w);
		for (let x=0; x<w; x++) {
			b[y][x] = a[w-1-x][y];
		}
	}
	return b;
}

/**
 * Rotates the given 2d array 180 degrees clockwise.
 * @param  {Array} a two-dimensional array
 * @return {Array}   2d array representing a rotated version of the input
 */
export function rotate180(a) {
	const w = a[0].length;
	const h = a.length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		let n = h-1-y;
		b[n] = new Array(w);
		for (let x=0; x<w; x++) {
			b[n][w-1-x] = a[y][x];
		}
	}
	return b;
}

/**
 * Rotates the given 2d array 270 degrees clockwise.
 * @param  {Array} a two-dimensional array
 * @return {Array}   2d array representing a rotated version of the input
 */
export function rotate270(a) {
	const w = a.length;
	const h = a[0].length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		b[y] = new Array(w);
		for (let x=0; x<w; x++) {
			b[y][x] = a[x][h-1-y];
		}
	}
	return b;
}

/**
 * Flips the given two-dimensional array horizontally.
 * @param  {Array} a two-dimensional array
 * @return {Array}   flipped version of the input
 */
export function hflip(a) {
	const h = a.length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		let w = a[y].length;
		b[y] = new Array(w);
		for (let x=0; x<w; x++) {
			let n = w-1-x;
			b[y][n] = a[y][x];
		}
	}
	return b;
}

/**
 * Flips the given two-dimensional array vertically.
 * @param  {Array} a two-dimensional array
 * @return {Array}   flipped version of the input
 */
export function vflip(a) {
	const h = a.length;
	let b = new Array(h);
	for (let y=0; y<h; y++) {
		let w = a[y].length;
		let n = h-1-y;
		b[n] = new Array(w);
		for (let x=0; x<w; x++) {
			b[n][x] = a[y][x];
		}
	}
	return b;
}

/**
 * Rotates the given two-dimensional array by the given right angle in degrees. 
 * Degrees must be a multiple of 90. Returns the original input if told to 
 * rotate by 0 or 360 degrees.
 * @param  {Array}  a   two-dimensional array
 * @param  {Number} deg Degrees to rotate. Must be a multiple of 90.
 * @return {Array}      the rotated two-dimensional array; or the original input
 *                      if told to rotate by 0 or 360 degrees.
 */
export function rotate(a, deg) {
	if (deg % 90 !== 0) {
		throw new Error(
			'Invalid input; degrees must be a multiple of 90'
		);
	}
	const d = ((deg % 360) + 360) % 360;
	if (d === 90) {
		return rotate90(a);
	} else if (d === 180) {
		return rotate180(a);
	} else if (d === 270) {
		return rotate270(a);
	}
	// otherwise, if it's 0 degrees
	return a;
}
