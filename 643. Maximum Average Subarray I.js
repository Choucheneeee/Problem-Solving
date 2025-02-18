/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = -Infinity;

    function cal(i, prevSum) {
        if (i === 0) {
            let res = 0;
            for (let j = 0; j < k; j++) {
                res += nums[j];
            }
            return res;
        } else {
            return prevSum - nums[i - 1] + nums[i + k - 1];
        }
    }

    let sum = cal(0, 0); 
    max = sum; 

    for (let i = 1; i <= nums.length - k; i++) {
        sum = cal(i, sum); 
        max = Math.max(max, sum);
    }

    return max / k;
};
