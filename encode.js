export default function encode(message, alp) {

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