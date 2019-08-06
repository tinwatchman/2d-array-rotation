'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rotate90 = rotate90;
exports.rotate180 = rotate180;
exports.rotate270 = rotate270;
exports.hflip = hflip;
exports.vflip = vflip;
exports.rotate = rotate;

function rotate90(a) {
  const w = a.length;
  const h = a[0].length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[y][x] = a[w - 1 - x][y];
    }
  }

  return b;
}

function rotate180(a) {
  const w = a[0].length;
  const h = a.length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    let n = h - 1 - y;
    b[n] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[n][w - 1 - x] = a[y][x];
    }
  }

  return b;
}

function rotate270(a) {
  const w = a.length;
  const h = a[0].length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[y][x] = a[x][h - 1 - y];
    }
  }

  return b;
}

function hflip(a) {
  const h = a.length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    let w = a[y].length;
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      let n = w - 1 - x;
      b[y][n] = a[y][x];
    }
  }

  return b;
}

function vflip(a) {
  const h = a.length;
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    let w = a[y].length;
    let n = h - 1 - y;
    b[n] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[n][x] = a[y][x];
    }
  }

  return b;
}

function rotate(a, deg) {
  if (deg % 90 !== 0) {
    throw new Error('Invalid input; degrees must be a multiple of 90');
  }

  const d = (deg % 360 + 360) % 360;

  if (d === 90) {
    return rotate90(a);
  } else if (d === 180) {
    return rotate180(a);
  } else if (d === 270) {
    return rotate270(a);
  }

  return a;
}
//# sourceMappingURL=2d-array-rotation.js.map
