2d-array-rotation
=================
> rotates two-dimensional arrays clockwise

[![Build Status](https://travis-ci.org/tinwatchman/2d-array-rotation.svg?branch=master)](https://travis-ci.org/tinwatchman/2d-array-rotation)
[![Coverage Status](https://coveralls.io/repos/github/tinwatchman/2d-array-rotation/badge.svg?branch=master)](https://coveralls.io/github/tinwatchman/2d-array-rotation?branch=master)

A collection of functions to rotate the values within a given two-dimensional array (i.e. an `Array` of `Array`s) clockwise by 90, 180 or 270 degrees. Potentially useful for, say, turning around game pieces or sprites. Provided as an ES6-compatible module.

__Functions__
- [rotate](#rotatearr-deg)
- [transpose](#transposearr)
- [mirror](#mirrorarr)
- [mirrorTranspose](#mirrortransposearr)
- [hflip](#hfliparr)
- [vflip](#vfliparr)
- wrappers/aliases:
    + [rotate90CW](#rotate90cwarr)
    + [rotate180CW](#rotate180cwarr)
    + [rotate270CW](#rotate270cwarr)

**Additional Notes**
- Source arrays are not directly modified.
- Values within rows are reindexed directly from the source array, not copied or cloned. Object references will therefore remain unchanged.
- Make sure that rows within arrays are all the same length. Results may be inconsistent otherwise.

## Installation

```sh
npm install 2d-array-rotation
# or to install without devDependencies:
npm install 2d-array-rotation --only=production
```

## Usage

### Via ES6-style imports

```javascript
import {transpose, mirror} from "2d-array-rotation";
```

### Via standard node.js requires

```javascript
const transpose = require('2d-array-rotation').transpose;
const mirror = require('2d-array-rotation').mirror;
```

## Functions

### rotate(arr, deg)

Master function that calls the others depending on the input. Rotates the given two-dimensional array by the given number of degrees.

```javascript
let i = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
    [13, 14, 15]
];
let o = rotate(i, 90);
/**
 * Result: [
 * [13, 10, 7, 4, 1],
 * [14, 11, 8, 5, 2],
 * [15, 12, 9, 6, 3]
 * ]
 */
```

#### Parameters
+ `arr` (`Array`): A two-dimensional array.
+ `deg` (`Number`): Number of degrees to rotate. Must be a multiple of 90, or an error will be thrown.

#### Returns
A two-dimensional `Array` with the values rotated; or, if rotating by 0 or 360 degrees is requested, the original `arr` itself without any modifications.

### transpose(arr)

Flips the given array's values over its diagonal, equivalent to rotating it by 90 degrees clockwise.

```javascript
let i = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
let o = transpose(i);
/**
 * Result: [
 * [ 7, 4, 1 ],
 * [ 8, 5, 2 ],
 * [ 9, 6, 3 ]
 * ]
 */
```

#### Parameters
+ `arr` (`Array`): a two-dimensional array

#### Returns
The transpose of the input.

### mirror(arr)

Flips the given array's values over the horizontal and vertical axes, the equivalent of rotating it 180 degrees clockwise.

```javascript
let i = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
let o = mirror(i);
/**
 * Result: [
 * [12, 11, 10],
 * [ 9,  8,  7],
 * [ 6,  5,  4],
 * [ 3,  2,  1]
 * ]
 */
```

#### Parameters
+ `arr` (`Array`): a two-dimensional array

#### Returns
The mirrored form of the given array.

### mirrorTranspose(arr)

Flips the given array's values over its diagonal and the horizontal and vertical axes. Equivalent to rotating it 270 degrees clockwise.

```javascript
let i = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
let o = mirrorTranspose(i);
/**
 * Result: [
 * [ 3, 6, 9 ],
 * [ 2, 5, 8 ],
 * [ 1, 4, 7 ]
 * ]
 */
```

#### Parameters
+ `arr` (`Array`): a two-dimensional array

#### Returns
The mirrored transpose of the given array.

### hflip(arr)

Bonus function -- flips the array over its horizontal axis.

```javascript
let input = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
let o = hflip(input);
/**
 * Result: [
 * [3, 2, 1],
 * [6, 5, 4],
 * [9, 8, 7],
 * [12, 11, 10],
 * ]
 */
```

### vflip(arr)

Bonus function -- flips the array over its vertical axis.

```javascript
let input = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
let o = vflip(input);
/**
 * Result: [
 * [ 7, 8, 9 ],
 * [ 4, 5, 6 ],
 * [ 1, 2, 3 ]
 * ]
 */
```

### rotate90CW(arr)

A wrapper around `transpose`. Usage may potentially result in more readable code.

### rotate180CW(arr)

A wrapper around `mirror`. Usage may potentially result in more readable code.

### rotate270CW(arr)

A wrapper around `mirrorTranspose`. Usage may potentially result in more readable code.

### Testing

```sh
npm test
```

### Credits and Licensing

Created by [Jon Stout](http://www.jonstout.net). Licensed under [the MIT license](http://opensource.org/licenses/MIT).

### Special Thanks To

u/Epyo on Reddit.