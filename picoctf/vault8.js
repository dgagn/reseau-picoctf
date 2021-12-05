#!/usr/bin/env node

const expected = [
  0xF4, 0xC0, 0x97, 0xF0, 0x77, 0x97, 0xC0, 0xE4, 0xF0, 0x77, 0xA4, 0xD0, 0xC5,
  0x77, 0xF4, 0x86, 0xD0, 0xA5, 0x45, 0x96, 0x27, 0xB5, 0x77, 0xC0, 0xB4, 0xD1,
  0xD2, 0x85, 0xA4, 0xA5, 0xC1, 0x85
]

function decode(input) {
  const arr = [...input]
  for (let i = 0; i < arr.length; i++) {
    let c = arr[i]
    c = switchBits(c, 6, 7);
    c = switchBits(c, 2, 5);
    c = switchBits(c, 3, 4);
    c = switchBits(c, 0, 1);
    c = switchBits(c, 4, 7);
    c = switchBits(c, 5, 6);
    c = switchBits(c, 0, 3);
    c = switchBits(c, 1, 2);
    arr[i] = c;
  }
  return arr;
}

// pris la fonction directement dans le java
function switchBits(c, p1, p2) {
  const mask1 = (1 << p1);
  const mask2 = (1 << p2);
  const bit1 = (c & mask1);
  const bit2 = (c & mask2);
  const rest = (c & ~(mask1 | mask2));
  const shift = (p2 - p1);
  return ((bit1 << shift) | (bit2 >> shift) | rest);
}

const char = decode(expected.join(''));

console.log(char)
