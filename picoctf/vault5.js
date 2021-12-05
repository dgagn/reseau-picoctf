#!/usr/bin/env node
const Buffer = require('buffer').Buffer

// copier le buffer du fichier java
const buff = "JTYzJTMwJTZlJTc2JTMzJTcyJTc0JTMxJTZlJTY3JTVmJTY2JTcyJTMwJTZkJTVmJTYyJTYxJTM1JTY1JTVmJTM2JTM0JTVmJTMxJTMxJTM3JTM3JTY2JTM3JTM4JTMz";

// decoder uri a partir de base64
console.log(`picoCTF{${decodeURIComponent(Buffer.from(buff, 'base64').toString())}}`)