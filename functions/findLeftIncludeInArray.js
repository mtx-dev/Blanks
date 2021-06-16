'use strict'

const amount = 100;
const arr = [...new Array(amount)].map(() => Math.round(Math.random()*100)) 
arr.sort((a,b) => a - b);

// const arr = [
//     1, 1, 1, 3,  4,  4,  4,  5,  5,  9, 11, 12, 13, 13,
//    15, 16, 16, 16, 19, 21, 25, 26, 26, 28, 28, 28,
//    29, 29, 30, 30, 33, 34, 34, 34, 39, 40, 41, 42,
//    42, 43, 43, 45, 46, 48, 49, 51, 53, 54, 55, 55,
//    55, 55, 57, 57, 58, 58, 59, 59, 60, 61, 62, 63,
//    64, 65, 66, 66, 67, 68, 68, 68, 69, 74, 75, 76,
//    76, 77, 77, 78, 80, 81, 82, 82, 84, 84, 84, 85,
//    85, 85, 86, 87, 88, 89, 90, 90, 90, 91, 94, 95,
//    96, 96, 98, 99
//  ]



function find (arr, num, left=0, right=arr.length) {
    if (left > right) return -1; 
    
    let result = -1;
    const length = right - left;
    const current = left + Math.floor(length/2);
    
	if (arr[current] === num && arr[current-1] !== num) return current; 
    if (arr[current] >= num) result = find (arr, num, left, current - 1);
    else  result = find (arr, num, current + 1, right);
    
    return result;
}
let num = 99;
let res = find(arr, num);
console.log('test= ', num, ' res = ', res, '\narr ', arr);
// console.log('test= ', num, ' res = ', res, 'arr [...]', arr[res-2], arr[res-1], '>', arr[res], arr[res+1], arr[res+2]);
