/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    ch=""
    word=""
    for(i=0;i<s.length;i++){
        if (s[i]!=" "){
            word=word+s[i]
        }
        else{
            if (i<s.length-1 && s[i+1]!=" "){
                ch=word+" "+ch
                word=""
            }
            
        }
        
    }
    ch=word+" "+ch
    while (ch[ch.length-1]==" "){
    ch =ch.substring(0,ch.length - 1); // Removes the last character
    }
    return ch

    
};