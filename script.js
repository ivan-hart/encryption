import encode from './encode.js'
import decode from './decode.js'

const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ',', '.', '?', ' ']

let message = "I love to code!"

console.log(message);

let encoded = encode(message, alp)

console.log(encoded);

console.log(decode(encoded, alp))