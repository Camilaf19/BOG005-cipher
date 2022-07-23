
const cipher = {
    encode: function (offset, string) {
        if (offset === undefined && string === undefined) {
            throw new TypeError;
        } else if (offset === 0 && string === 0) {
            throw new TypeError;
        } else if (offset === null || string === []) {
            throw new TypeError;
        }

        let myString = "";
        for (let i = 0; i < string.length; i++) {
            let capitalLetters = string.toUpperCase();
            let ascciNum = capitalLetters[i].charCodeAt(0);
            let position = (ascciNum - 65 + offset) % 26 + 65;
            myString = myString + String.fromCharCode(position);
        }
        return myString

    },

    decode: function (offset, string) {
        if (offset === undefined && string === undefined) {
            throw new TypeError;
        } else if (offset === 0 && string === 0) {
            throw new TypeError;
        } else if (offset === null || string === []) {
            throw new TypeError;
        }

        let mystring2 = ""
        for (let i = 0; i < string.length; i++) {
            let capitalLetters2 = string.toUpperCase();
            let ascciNum2 = capitalLetters2[i].charCodeAt();

            if (ascciNum2 >= 65 && ascciNum2 <= 90) {
                let positionDecode = (ascciNum2 - 65 - offset) % 26;

                if (positionDecode < 0) {
                    positionDecode = positionDecode + 65 + 26;
                    mystring2 = mystring2 + String.fromCharCode(positionDecode);
                } else {
                    positionDecode = positionDecode + 65;
                    mystring2 = mystring2 + String.fromCharCode(positionDecode);
                }
            }
        }

        return mystring2
    }
};

export default cipher;
