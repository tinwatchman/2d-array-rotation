'use strict';

/**
 * Flips the given two-dimensional array over its diagonal (or, in other words, 
 * rotates it 90 degrees clockwise.)
 * @param  {Array} a two-dimensional array
 * @return {Array}   the transpose of the input
 */
export function transpose(a) {
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
 * Flips the given two-dimensional array over both horizontally and vertically 
 * (which is essentially the same as rotating it 180 degrees clockwise.)
 * @param  {Array} a two-dimensional array
 * @return {Array}   the mirror of the input
 */
export function mirror(a) {
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
 * The equivalent of both mirroring and transposing the given two-dimensional 
 * array. Equivalent to rotating it 270 degrees clockwise.
 * @param  {Array} a two-dimensional array
 * @return {Array}   the mirrored transpose of the input
 */
export function mirrorTranspose(a) {
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
 * Wrapper functions
 */

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
		return transpose(a);
	} else if (d === 180) {
		return mirror(a);
	} else if (d === 270) {
		return mirrorTranspose(a);
	}
	// otherwise, if it's 0 degrees
	return a;
}

/**
 * Rotates given array 90 degrees clockwise. Wrapper around `transpose.`
 * @param  {Array} a two-dimensional array
 * @return {Array}
 * @see transpose
 */
export function rotate90CW(a) {
	return transpose(a);
}

/**
 * Rotates given array 180 degrees clockwise. Wrapper around `mirror.`
 * @param  {Array} a two-dimensional array to rotate
 * @return {Array}
 * @see mirror
 */
export function rotate180CW(a) {
	return mirror(a);
}

/**
 * Rotates given array 270 degrees clockwise. Wrapper around `mirrorTranspose.`
 * @param  {Array} a two-dimensional array to rotate
 * @return {Array}
 * @see mirrorTranspose
 */
export function rotate270CW(a) {
	return mirrorTranspose(a);
}
