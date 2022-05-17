/**
 * @description
 * The Collatz Conjecture
 * Pick a positive number, if it's even divide by 2,
 * and if it's odd multiply by 3 and add 1.
 * It will always ended up in 4-2-1 loop.
 */
function collatz(starting) {
    let currentNumber = starting;
    let x = [starting];

    while (!x.includes(1)) {
        let draft;

        if (currentNumber % 2 === 0) {
            draft = currentNumber / 2;
            x.push(draft);
            currentNumber = draft;
        } else if (currentNumber % 2 === 1) {
            draft = currentNumber * 3 + 1;
            x.push(draft);
            currentNumber = draft;
        }
    }

    return x;
}

console.log(collatz(26));
