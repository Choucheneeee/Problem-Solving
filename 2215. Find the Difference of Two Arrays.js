/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    res=[[],[]]
    for(i=0;i<nums1.length;i++){
        if(nums2.indexOf(nums1[i])==-1 && res[0].indexOf(nums1[i])==-1){
            res[0].push(nums1[i])

        }
    }
    for(i=0;i<nums2.length;i++){
         if(nums1.indexOf(nums2[i])==-1 && res[1].indexOf(nums2[i])==-1)
         {
            res[1].push(nums2[i])
        }
    }
    return res

    
};