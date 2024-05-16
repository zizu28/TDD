const capitalize = (str) => {
    if(typeof str !== 'string') throw new Error(`${str} is not a string.`)
    if(str.length === 0) throw new Error('Ivalid input: Empty string')
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const reverseString = (str) => {
    if(typeof str !== 'string') throw new Error(`${str} is not a string.`)
    if(str.length === 0) throw new Error('Ivalid input: Empty string')
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a,b) => { return a+b; }, 
    subtract: (a,b) => { return Math.abs(a - b); }, 
    divide: (a,b) => { return Math.floor(a/b); }, 
    multiply: (a,b) => { return a*b; }
}

const wrapCharCode = (charCode, shiftValue) => {
    const alphabetLength = 26;
    let newCharCode = charCode;

    if(charCode >= 65 && charCode <= 95){
        newCharCode = (charCode - 65 + shiftValue) % alphabetLength + 65;
    }
    else if(charCode >= 97 && charCode <= 122){
        newCharCode = (charCode - 97 + shiftValue) % alphabetLength + 97;
    }
    else {
        return charCode;
    }
    return newCharCode;
}

const ceasarCipher = (str, key) => {
    let shiftedChar = '';
    for(let i = 0; i < str.length; i++){
        let charCode = str.charCodeAt(i);
        const shiftedCharCode = wrapCharCode(charCode, key);
        shiftedChar += String.fromCharCode(shiftedCharCode);
    }
    return shiftedChar;
}

const analyzeArray = (arr) => {
    const numbers = arr.filter(element => typeof element === 'number'); 
    if (numbers.length === 0) { 
        return { average: NaN, min: NaN, max: NaN, length: arr.length };
    }
    const obj = {};
    let average = arr.reduce((prev, curr) => prev + curr, 0)
    obj['average'] = Math.round(average / arr.length);
    obj['min'] = Math.min(...arr)
    obj['max'] = Math.max(...arr);
    obj['length'] = arr.length;
    return obj;
}
module.exports = { capitalize, reverseString, calculator, ceasarCipher, analyzeArray }