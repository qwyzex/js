function rangeDivider(numRange, divider) {
    let arr = [];
    let currentNumber = numRange[0];

    while (true) {
        if (!Array.isArray(divider)) {
            if (currentNumber % divider === 0) {
                arr.push(currentNumber);
            }
        } else if (Array.isArray(divider)) {
            let v = [];
            divider.forEach((e) => {
                v.push(currentNumber % e == 0);
            });
            // console.log(v);
            if (!v.includes(false)) arr.push(currentNumber);
        }
        if (currentNumber == numRange[1]) {
            break;
        }
        currentNumber++;
    }

    let ans = arr.length;

    return { length: ans, all_numbers: arr };
}

console.log(rangeDivider([1, 20], [2, 3]));
console.log(rangeDivider([1, 20], 3));

// v = [];

// [3, 6, 9].forEach((e) => {
//     v.push(18 % e == 0);
// });

// console.log(v);
