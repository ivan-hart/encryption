function encode(message, alp) {

    message = message.toLowerCase()

    let keyArray = []

    let codeArray = []

    for (let i = 0; i < message.length; i++) {

        let key = Math.floor(Math.random() * 10) + 1

        keyArray.push(key)

        for (let j = 0; j < alp.length; j++) {

            if (message[i] === alp[j]) {

                codeArray.push((j + 1) * key)

            }
        }
    }

    message = ''

    for (let i = 0; i < codeArray.length; i++) {

        message += codeArray[i] + " " + keyArray[i] + " "

    }

    return message
}

function decode(message, alp) {

    message = message.split(" ")

    res = ''

    for (let i = 0; i < message.length - 1; i+=2) {

        let index = parseInt(message[i] / message[i+1])

        res += alp[index - 1]
    }

    return res
}

const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ',', '.', '?', ' ']

let message = "I love to code!"

console.log(message);

let encoded = encode(message, alp)

console.log(encoded);

console.log(decode(encoded, alp))