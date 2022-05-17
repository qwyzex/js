// day 1

// Binary search

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

function findIndex(target, start, end) {
    if (start > end) {
        return "Not Found";
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return middle;
    }

    if (arr[middle] > target) {
        findIndex(target, start, middle - 1);
    }

    if (arr[middle] < target) {
        findIndex(target, middle + 1, end);
    }
}

const v = findIndex(3, 1, 9);

console.log(v);

console.log("a" + "b");
