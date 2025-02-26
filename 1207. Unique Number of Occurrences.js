/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    
    function occ(beg){
        n=arr[beg]
        oc=0
        for (j=beg;j<arr.length;j++){
            if (n==arr[j]){
                oc++;
            }
        }
        return oc

    }
    test=[]
    testocc=[]
    for (i=0;i<arr.length;i++){
        if (test.indexOf(arr[i])==-1){
            resocc=occ(i)
            if (testocc.indexOf(resocc)==-1){
                testocc.push(resocc)
                test.push(arr[i])
            }
            else{
                return false
            }
        }
    }
    return true
    
};