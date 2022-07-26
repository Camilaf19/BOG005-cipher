
const cipher = {
    encode: function (offset, string) {
        if (offset === undefined && string === undefined) {
            throw new TypeError("Debe llenar los campos necesarios");
        } else if (offset === 0 && string === 0) {
            throw new TypeError;
        } else if (offset === null || string === []) {
            throw new TypeError;
        } else if (offset == 0 && string == 0) {
            throw new TypeError;
        }

        let myString = "";
        for (let i = 0; i < string.length; i++) {
            let ascciNum = string[i].charCodeAt(0);
            // cifrar minusculas
            if (ascciNum >= 97 && ascciNum <= 122) {
                let positionMayus = (ascciNum - 97 + offset) % 26 + 97;
                myString = myString + String.fromCharCode(positionMayus);
            }
            // cifrar mayusculas
            else if (ascciNum >= 65 && ascciNum <= 90) {
                let position = (ascciNum - 65 + offset) % 26 + 65;
                myString = myString + String.fromCharCode(position);
            }
            //condicional para caracteres especiales 
            else if (ascciNum >= 32 && ascciNum <= 64) {
                myString = myString + String.fromCharCode(ascciNum);
            }
        }

        return myString

    },

    decode: function (offset, string) {
        //condicionales para errores de test
        if (offset === undefined && string === undefined) {
            throw new TypeError("Debe llenar los campos necesarios");
        } else if (offset === 0 && string === 0) {
            throw new TypeError;
        } else if (offset === null || string === []) {
            throw new TypeError;
        } else if (offset == 0 && string == 0) {
            throw new TypeError;
        }
        //descifrado 
        let mystring2 = "";
        let positionMinus = "";
        for (let i = 0; i < string.length; i++) {
            let ascciNum2 = string[i].charCodeAt(0);
            //descifrando minusculas 
            if (ascciNum2 >= 97 && ascciNum2 <= 122) {
                positionMinus = (ascciNum2 - 97 - offset) % 26;
                if (positionMinus < 0) {
                    let positionResult = positionMinus + 97 + 26;
                    mystring2 = mystring2 + String.fromCharCode(positionResult);
                }
                else {
                    let positionResult2 = positionMinus + 97;
                    mystring2 = mystring2 + String.fromCharCode(positionResult2);
                }
            }
            // descifrado mayusculas 
            if (ascciNum2 >= 65 && ascciNum2 <= 90) {
                positionMinus = (ascciNum2 - 65 - offset) % 26;

                if (positionMinus < 0) {
                    positionMinus = positionMinus + 65 + 26;
                    mystring2 = mystring2 + String.fromCharCode(positionMinus);
                } else {
                    positionMinus = positionMinus + 65;
                    mystring2 = mystring2 + String.fromCharCode(positionMinus);
                }
            }
          //condicional para caracteres especiales
            if (ascciNum2 >= 32 && ascciNum2 <= 64) {
                mystring2 = mystring2 + String.fromCharCode(ascciNum2);
            }
        }

        return mystring2
    }
}

export default cipher; 
