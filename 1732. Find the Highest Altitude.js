/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    gain.unshift(0)
    max=0
    for (i=1;i<gain.length;i++){
        gain[i]=gain[i]+gain[i-1]
        if (max==null || max<gain[i]){
            max=gain[i]
        }

    }
    return max

    
};