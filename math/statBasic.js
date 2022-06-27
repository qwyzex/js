function getModus(array) {
    let frequency = [];
    let maxFreq = 0;
    let modes = [];

    for (let i in array) {
        frequency[array[i]] = (frequency[array[i]] || 0) + 1;
        if (frequency[array[i]] > maxFreq) {
            maxFreq = frequency[array[i]];
        }
    }

    for (let f in frequency) {
        if (frequency[f] == maxFreq) {
            modes.push(f);
        }
    }

    return modes;
}

function stat(arr) {
    let mean,
        median = 0,
        modus = getModus(arr);
    let even = arr.length % 2 == 0;
    let total = null;

    arr.forEach((e) => {
        total += e;
    });

    let sorted = arr.sort((a, b) => a - b);
    let highest = sorted.at(-1),
        lowest = sorted[0];

    mean = total / arr.length;
    median = even
        ? (arr[arr.length / 2 - 1] + arr[arr.length / 2]) / 2
        : arr[(arr.length + 1) / 2 - 1];

    console.log(`
        Mean = ${mean}
        Median = ${median}
        Modus = ${modus}\n
        Total = ${total}
        Quantity = ${arr.length}
        Even = ${even}\n
        Sorted = ${sorted}
        Highest = ${highest}
        Lowest = ${lowest}
    `);

    return {
        mean: mean,
        median: median,
        modus: modus,
        total: total,
        quantity: arr.length,
        even: even,
        sorted: sorted,
        highest: highest,
        lowest: lowest,
    };
}

// stat([6, 7, 7, 8, 8, 8, 8, 9, 9, 9, 10]);
// stat([78, 53, 60, 88, 78, 53, 50, 77, 53, 60, 80]);
// stat([4, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 8, 9])
// stat([4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 9, 9, 9, 9])
// stat([4, 5, 5, 6, 7, 8, 7, 6, 9, 7, 5, 9, 8, 7])
// stat([25, 25, 25, 71, 60, 56, 47])
stat([8, 6, 5, 9, 7, 6, 4, 5])
