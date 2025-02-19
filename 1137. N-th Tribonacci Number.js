/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    t0=0
    t1=1
    t2=1
    res=0
    if (n>2){
        for (i=3;i<=n;i++){
            res=t2+t1+t0
            t0=t1
            t1=t2
            t2=res
            
        }
    return res
    }
    return res!=0? res : n==0? 0 : 1  
    
};