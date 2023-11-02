import randomNum from './random-number.js';

function randomIndex(arr: Array<string>):string | undefined {
    if (Array.isArray(arr) !== true) {
        console.warn('arr argument was not an array', arr);
        return undefined;
    }
    const randomNumber = randomNum(0, arr.length - 1);
    return arr[randomNumber];
}

export default randomIndex;
