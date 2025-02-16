/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let count = 7; 
    let map={'sum':0}
    var ch=n.toString()
        while (map["sum"]!=1){
            if (count<=0) {
                return false; // Return false if loop is infinite
        }
            for (char of ch){
                map['sum']=map['sum']+parseInt(char)*parseInt(char)
            }
            if (map["sum"]==1){
                return true 
            }
            else{
                ch=map["sum"].toString()
                map={'sum':0}
                count--;
            }
              
        }
        }