2d-array-rotation
=================
[![Build Status](https://travis-ci.org/tinwatchman/2d-array-rotation.svg?branch=master)](https://travis-ci.org/tinwatchman/2d-array-rotation)
[![Coverage Status](https://coveralls.io/repos/github/tinwatchman/2d-array-rotation/badge.svg?branch=master)](https://coveralls.io/github/tinwatchman/2d-array-rotation?branch=master)

A collection of functions to rotate the values within a given two-dimensional array (i.e. an `Array` of `Array`s) clockwise by 90, 180 or 270 degrees. Potentially useful for -- say -- manipulating game pieces or sprites, among other possible applications. Provided as an ES6-compatible module.

__Functions__
- [rotate90](#rotate90arr)
- [rotate180](#rotate180arr)
- [rotate270](#rotate270arr)
- [rotate](#rotatearr-deg)
- [hflip](#hfliparr)
- [vflip](#vfliparr)

__Additional Notes__
- Can handle both square (e.g. 3x3) and rectangular (e.g. 3x5, 4x8) two-dimensional arrays. Just make sure that the rows are all the same length; results may be inconsistent otherwise.
- Source arrays are not directly modified.
- Values within rows are re-indexed directly from the source array, not copied or cloned. Object types and references will remain consistent.

## Installation

```sh
npm install 2d-array-rotation
```

## Usage

### Importing

#### Via ES6-style imports

```javascript
import {rotate, rotate90} from "2d-array-rotation";
```

#### Via standard node.js requires

```javascript
const rotate = require('2d-array-rotation').rotate;
const rotate90 = require('2d-array-rotation').rotate90;
// and so on
```

### Functions

#### rotate90(arr)

Rotates the given two-dimensional array 90 degrees clockwise.

```javascript
let i = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
let o = rotate90(i);
/**
 * Result: [
 * [ 7, 4, 1 ],
 * [ 8, 5, 2 ],
 * [ 9, 6, 3 ]
 * ]
 */
```

##### Parameters
+ `arr` (`Array`): a two-dimensional array

##### Returns
A new two-dimensional `Array` that represents the rotated form of the input.

#### rotate180(arr)

Rotates the given two-dimensional array 180 degrees clockwise.

```javascript
let i = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];
let o = rotate180(i);
/**
 * Result: [
 * [12, 11, 10],
 * [ 9,  8,  7],
 * [ 6,  5,  4],
 * [ 3,  2,  1]
 * ]
 */
```

##### Parameters
+ `arr` (`Array`): a two-dimensional array

##### Returns
A new two-dimensional `Array` that represents the rotated form of the input.

#### rotate270(arr)

Rotates the given two-dimensional array 270 degrees clockwise.

```javascript
let i = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ]
];
let o = rotate270(i);
/**
 * Result: [
 * [ 3, 6, 9 ],
 * [ 2, 5, 8 ],
 * [ 1, 4, 7 ]
 * ]
 */
```

##### Parameters
+ `arr` (`Array`): a two-dimensional array

##### Returns
A new two-dimensional `Array` that represents the rotated form of the input.

#### rotate(arr, deg)

Rotates the given two-dimensional array by the given number of degrees clockwise. Calls `rotate90`, `rotate180`, or `rotate270`, depending on the input. 

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
// note that this function can also handle negative degree values...
let o2 = rotate(i, -270); // returns same as above
// ... and degree values higher than 360
let o3 = rotate(i, 450); // returns same as above
```

##### Parameters
+ `arr` (`Array`): A two-dimensional array.
+ `deg` (`Number`): Number of degrees to rotate. Must be a multiple of 90, or an error will be thrown.

##### Returns
A new two-dimensional `Array` that represents the rotated form of the input; or, if told to rotate by 0 or 360 degrees, the original `arr` itself without any modifications.

#### hflip(arr)

Bonus function -- flips the array horizontally.

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

#### vflip(arr)

Bonus function -- flips the array vertically.

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

## Testing

```sh
npm test
```

## Release History

* 2.1.0
    - updated dependencies

## Credits and Licensing

Created by [Jon Stout](http://www.jonstout.net). Licensed under [the MIT license](http://opensource.org/licenses/MIT).

## Special Thanks To

u/Epyo on Reddit.