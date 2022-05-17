n = 1

while (n != null) try {
    n += 1;
    if (n > 2000) {
        n = null;
    }
    console.log(n)
} finally {}

foo()