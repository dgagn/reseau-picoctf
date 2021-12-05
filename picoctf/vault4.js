#!/usr/bin/env node

// pris les char codes dans le code directement
let charCodes = [
    106 , 85  , 53  , 116 , 95  , 52  , 95  , 98  ,
    0x55, 0x6e, 0x43, 0x68, 0x5f, 0x30, 0x66, 0x5f,
    0o142, 0o131, 0o164, 0o63, 0o163, 0o137, 0o62, 0o66
]

// les characters qui étais déja sous forme de char
let endChars = '7e03d116'

console.log(`picoCTF{${String.fromCharCode(...charCodes) + endChars}}`)