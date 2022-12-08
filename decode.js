export default function decode(message, alp) {

    message = message.split(" ")

    res = ''

    for (let i = 0; i < message.length - 1; i+=2) {

        let index = parseInt(message[i] / message[i+1])

        res += alp[index - 1]
    }

    return res
}