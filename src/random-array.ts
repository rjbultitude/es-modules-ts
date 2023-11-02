import {times} from 'lodash-es';
import randomNumber from './random-number.js';

function getArrayOfRandomNums() {
    const rndmNum = randomNumber(0, 20);
    let rndmNumArry;
    rndmNumArry = times(5, () => {
        return rndmNum;
    });
}

export default getArrayOfRandomNums;
