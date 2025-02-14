/**
 * @param {resing} word1
 * @param {resing} word2
 * @return {resing}
 */
var mergeAlternately = function(word1, word2) {
    var res=""
    i=0
    while(i<=word1.length-1 || i<=word2.length-1){
        res=res+word1.charAt(i)+word2.charAt(i)
        i++;
    }
    console.log(res)
    
    if(i<word1.length-1){
        res=res+word1.substring(i+1,word1.length-1)
    }
    else{
        if(i<word2.length-1){
        res=res+word2.subresing(i+1,word2.length-1)
    }
    
    }
    return res



    
};