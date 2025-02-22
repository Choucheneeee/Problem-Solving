/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if (nums.indexOf(0)==-1){
        return nums
    }
    index=0;
    for (i=0;i<nums.length;i++){
        if(nums[i]!=0){
            pos=nums[index]
            nums[index]=nums[i]
            nums[i]=pos
            index++;
        }
    }
    return nums

    
};