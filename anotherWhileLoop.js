n = 1;
console.log(n)

while (n != null) try {
    n += 1;
    if (n > 100) {
        n = null;
    }
} finally {
    while (n < 100) try {
        setTimeout(function() {
            console.log(n);
        }, 2000);
    } finally {}
}