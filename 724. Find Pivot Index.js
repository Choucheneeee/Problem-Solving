/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    function calc(beg,end){
        res=0
        for (k=beg;k<end;k++){
            res+=nums[k]
        }
        return res
    }

    for (i=0;i<nums.length;i++){
        left=calc(0,i)
        right=calc(i+1,nums.length)
        if (left==right){
            return i
        }
    }
     return -1
    
};