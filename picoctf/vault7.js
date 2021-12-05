#!/usr/bin/env node

const Buffer = require('buffer').Buffer

const binPass = [1096770097, 1952395366, 1600270708, 1601398833, 1716808014, 1734304870, 895891557, 1681142832]
    // transformer en base 16, donc HEXADECIMAL
    .map(bin => bin.toString(16))
    // join toutes les hex ensemble
    .join('');

// permet de convertir le HEX en ASCII à partir du buffer
const buffer = Buffer.from(binPass, 'hex')

// print le flag, faut faire un toString pour avoir le rendu en utf-8
console.log(`picoCTF{${buffer.toString()}}`)


