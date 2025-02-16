/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    len1=str1.length
    len2=str2.length

    function devis(i){
        if (len1%i !=0 || len2%i!=0){
            return false
        }
        f1=len1/i
        f2=len2/i
        return (str2.substring(0,i).repeat(f2)==str2 && str2.substring(0,i).repeat(f1)==str1)

    }

    for(i=Math.min(len1,len2);i>0;i--){
        if (devis (i)){
            return str2.substring(0,i)
        }
    }
    return ""
    
};