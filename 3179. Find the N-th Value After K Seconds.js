/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    const MOD = 1e9 + 7;
    a = Array(n).fill(1);
    count=0
    while (count<k){
            for (i=1;i<n;i++){
                a[i]=(a[i-1]+a[i])% MOD
            }
            count++;
        }
        console.log(a)
        return a[a.length-1] % MOD
    
};