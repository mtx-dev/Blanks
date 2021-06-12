function strEvenExclude(str1, str2, numDifferences) {
    if(str1.lenght !== str2.lenght) return false;
    const result = str1.split('')
        .reduce((different, char, index) => {
            if(str1[index] !== str2[index]) different++;
            return different;
        }, 0);
    return result === numDifferences;
}

// const tests = [
//     {str1: '', str2: '', num: 0, expect: true},
//     {str1: '', str2: '', num: 1, expect: false},
//     {str1: '123456789', str2: '123456789', num: 0, expect: true},
//     {str1: '1234567890', str2: '123456789', num: 0, expect: false},
//     {str1: '12345678', str2: '123456789', num: 1, expect: false},
//     {str1: '123456780', str2: '123456789', num: 1, expect: true},
//     {str1: '123456780', str2: '123456789', num: 0, expect: false},
//     {str1: '132456789', str2: '123456789', num: 1, expect: false},
//     {str1: '132456789', str2: '123456789', num: 2, expect: true},
// ];

// tests.forEach((test, index) => {
//     const res = strEvenExclude(test.str1, test.str2, test.num);
//     console.log(`Test ${index}: `, test.expect === res ? 'ok' : 'fault',
//         `  Exp: ${test.expect} - Res:`, res);
// });

