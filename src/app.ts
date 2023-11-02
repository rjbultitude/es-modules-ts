import randomIndex from './random-index.js';

const rndmNumberBtn = document.getElementById('gen-rndm-num') as HTMLElement;
const rndmNumberPara = document.getElementById('rndm-number') as HTMLElement;

// import('./random-index.mjs').then((module) => {
//     const randomIndex = module.default;
//     console.log('randomIndex', randomIndex(['0', '1', '2', '3']));
// });

const outputEl = document.getElementById('output') as HTMLElement;
let textNode = outputEl.textContent as string | undefined;
const strArr = ['Could', 'be', 'anything', 'in', 'this', 'array'];

textNode = randomIndex(strArr);

// Dynamic Import Example
function initRndmBtn() {
    rndmNumberBtn.addEventListener('click', async () => {
        const { default: rndmNumsArr } = await import('./random-array.js');
        rndmNumberPara.innerText = `${rndmNumsArr()}`
    });
}

initRndmBtn();

