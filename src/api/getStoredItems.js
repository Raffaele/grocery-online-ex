// Method created to simulate API.

import * as storedData from './storeData.json';

function getStoredItems() {
    return new Promise((res, rej) => {
        // simulation of random delay on the response
        const delay = 500 + Math.trunc(1000 * Math.random());
        setTimeout(() => {
            // simulation of rejection
            const solution = Math.random() < .05 ? rej : res;
            solution(storedData);
        }, delay);
    });
}

export default getStoredItems;