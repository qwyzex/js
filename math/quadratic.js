// Rumus ABC
/**
 * @description Dengan rumus pasti akar kuadrat
 * @return ans
 */
function abc(a, b, c) {
    const ans = [
        (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
        (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a),
    ];
    return ans;
}

/**
 * @description Dengan menemukan angka kuadrat yang pas untuk menenukan hasil
 * @returns ans
 */
function perfect(a, b, c) {
    let x;
    let right = 0;
    let bothSegment = Math.pow(b / 2, 2);

    if (a === 1) {
        right += -c;
        right += bothSegment;
        right = Math.sqrt(right);
        x = [right + b / 2, -right + b / 2];
    }

    return [x, right];
}

console.log(perfect(1, -6, 5));
