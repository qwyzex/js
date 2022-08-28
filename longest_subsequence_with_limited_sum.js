/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
 var answerQueries = function(nums, queries) {
    const [n, m] = [nums.length, queries.length];
    
    let answer = [];
    answer.length = m;
    
    let i = 0;
    
    while (i <= m) {
        let sum = queries[i]
        let draft = [];
        let x = 0;

        let lastIndex = n - (x + 1);
        
        while (lastIndex > 0) {
            if (!nums[lastIndex] > sum) {
                nums[lastIndex].push(draft)
            }
            x += 1;
        }
        i += 1;
    }
    
    return answer;
};
console.log(answerQueries([1,2,3,4,5], [3, 5, 7]))

let a = [1, 2, 3, 4, 5];

console.log(a[1])
console.log(a[0])
