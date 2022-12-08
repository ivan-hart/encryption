function encode(message, alp) {

    message = message.toLowerCase()

    let res = ""

    for (let i = 0; i < message.length; i++) {

        let key = Math.floor(Math.random() * 10) + 1

        for (let j = 0; j < alp.length; j++) {

            if (message[i] === alp[j]) {

                res += ((j + 1) * key).toString() + " "

            }
        }
        res += key.toString() + " "
    }

    return res
}

function decode(message, alp) {

    message = message.split(" ")

    res = ''

    for (let i = 0; i < message.length - 1; i += 2) {

        let index = parseInt(message[i] / message[i + 1])

        res += alp[index - 1]
    }

    return res
}

const alp = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', ',', '.', '?', ' ']

let message = "coding is fun for me but is not a possible carrer choice I would go into. I would prefer to be an IT profesional!"

console.log(message);

let encoded = encode(message, alp)

console.log(encoded);

console.log(decode(encoded, alp))