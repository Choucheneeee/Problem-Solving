/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    index=0
    for (i=0;i<t.length;i++){
        if (s[index]==t[i]){
            index++;
        }
    }
    return index==s.length? true:false
    
};