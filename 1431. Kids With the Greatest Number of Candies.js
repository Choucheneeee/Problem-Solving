/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    max=0
    arr=Array(candies.length).fill(false)
    candies.forEach((a)=>
    {
        if (a>max){
            max=a
        }
    }

    )
    for (i=0;i<arr.length;i++){
        arr[i]=(candies[i]+extraCandies)>=max? true: false
    }
    return arr

    
};