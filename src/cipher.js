
const cipher = {
    encode: function (offset, string) {
        let mistring = "";
        for (let i = 0; i < string.length; i++) {
            let capitalLetters = string.toUpperCase();
            let ascciNum = capitalLetters[i].charCodeAt(0);
            let position = (ascciNum - 65 + offset) % 26 + 65;
            let resultCipher = String.fromCharCode(position);
            mistring = mistring + resultCipher
        }
        return mistring


    },

    decode: function (offset, string) {

    }
};

console.log(cipher)

export default cipher;
