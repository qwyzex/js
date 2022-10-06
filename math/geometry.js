function cordinatey(formula) {
    const x = [-3, -2, -1, 0, 1, 2, 3];

    let xy = [];

    x.forEach((a) => {
        xy.push([x[a + 3], formula(a)]);
    });

    return xy;
}

