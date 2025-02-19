/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    map=new Map();
    for (n of nums){
        if (!map.has(n)) {
            map.set(n, 1);

        }
        else{
            map.set(n, map.get(n) + 1);

        }
    }
    res=null
    map.forEach((value, key) => {
    if (value === 1) {
        res=key 
    }

});
    return res
}