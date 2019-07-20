'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transpose = transpose;
exports.mirror = mirror;
exports.mirrorTranspose = mirrorTranspose;
exports.hflip = hflip;
exports.vflip = vflip;
exports.rotate = rotate;
exports.rotate90CW = rotate90CW;
exports.rotate180CW = rotate180CW;
exports.rotate270CW = rotate270CW;

function transpose(a) {
  const w = a.length;
  const h = getWidth(a);
  let b = new Array(h);

  for (let y = 0; y < h; y++) {
    b[y] = new Array(w);

    for (let x = 0; x < w; x++) {
      b[y][x] = a[w - 1 - x][y];
    }
  }

  return b;
}

function mirror(a) {
  const w = getWidth(a);
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

function mirrorTranspose(a) {
  const w = a.length;
  const h = getWidth(a);
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
    return transpose(a);
  } else if (d === 180) {
    return mirror(a);
  } else if (d === 270) {
    return mirrorTranspose(a);
  }

  return a;
}

function rotate90CW(a) {
  return transpose(a);
}

function rotate180CW(a) {
  return mirror(a);
}

function rotate270CW(a) {
  return mirrorTranspose(a);
}

function getWidth(a) {
  return a.reduce((acc, row) => {
    return Math.max(acc, row.length);
  }, 0);
}
//# sourceMappingURL=2d-array-rotation.js.map
