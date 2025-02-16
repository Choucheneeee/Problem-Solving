/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} 
 */
var merge = function(nums1, m, nums2, n) {
    p1=m-1
    p2=n-1
    p=n+m-1
    while (p1>=0 && p2>=0){
        if (nums2[p2]>nums1[p1]){
            nums1[p]=nums2[p2]
            p2--
        }
        else{
            nums1[p]=nums1[p1]
            p1--
            
        }
        p--
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
    
};