function lcm(one, two) {
    let min = one > two ? one : two;
    let found = false;

    while (!found) {
        if (min % one === 0 && min % two === 0) {
            found = true;
            return min;
        }
        min++;
    }
}

function hcf(one, two) {
    let hcf;

    for (let i = 1; i <= one && i <= two; i++) {
        if (one % i === 0 && two % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}

// console.log(hcf(15, 20));
// console.log(lcm(8, 12));

const f = {
    hcf,
    lcm,
};

console.log(hcf(15));

export default f;
