// d = sqrt(p^2 - (R + r)^2)

console.log(Math.sqrt(Math.pow(20, 2) - Math.pow(16 - 4, 2)));
//                         1156
// 30 = Math.sqrt(Math.pow(34, 2) - Math.pow(R + 6, 2))
console.log(Math.pow(30, 2));
console.log(Math.pow(34, 2));
console.log(Math.pow(34, 2) - Math.pow(30, 2));
console.log(Math.sqrt(256));

///
// 846cm2 = 2(15 * 12) + 2(15 * x) + 2(12 * x)
//          2(180)     +
//          360        +
// 486cm2 = (2 * 15) + (2 * x)  + (2 * 12) + (2 * x)
//          (2 * 15) + (2 * 12) + 2(2 * x)
//          30         24         4x
// 432cm2 = 4x

console.log(2 * (6 + 2) == 2 * 6 + 2 * 2);
console.log(846 - 360 - 30 - 24);
console.log(846 == 2 * (15 * 12) + 2 * (15 * 9) + 2 * (12 * 9));

///

console.log(2 * (6 * 12 + 6 * 9 + 12 * 9));

///

console.log(2400 / (4 * (15 + 12 + 13)));

///

console.log(12 * 15 + 18 * (9 + 12 + 15));

///

console.log((52 * 12 + 45 * 8) / (12 + 8));

///
console.log(73 * 31)
console.log(73.125 * 32)
console.log(73.125 * 32 - 73 * 31)

// xG = ((x1 * n1) + (x2 * n2)) / (n1 + n2)
// 73.125 = ((73 * 31) + (x2 * 1)) / (31 + 1)
// 73.125 = (2263 + x2) / 32
