/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    i=0;
    j=s.length-1
    v="aeiouAEIOU"
    while (j>i){
        if(v.indexOf(s.charAt(i))!=-1 && v.indexOf(s.charAt(j))!=-1){
                    s=s.substring(0,i)+s.charAt(j)+s.substring(i+1,j)+s.charAt(i)+s.substring(j+1)
                    i++;
                    j--;

                    }
                
        if (v.indexOf(s.charAt(i))==-1 && v.indexOf(s.charAt(j))==-1 ){
            i++;
            j--;
        }
        else{
            if (v.indexOf(s.charAt(i))!=-1 && v.indexOf(s.charAt(j))==-1 ){
                j--;
            }

            else{
                if(v.indexOf(s.charAt(i))==-1 && v.indexOf(s.charAt(j))!=-1 ){
                    i++
                }
            
            }
            
        }

    }
    return s
    
};