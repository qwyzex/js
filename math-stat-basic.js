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

stat([1, 1, 1, 3, 8, 4]);
