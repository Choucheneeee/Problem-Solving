/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
    map={}
    ck=97
    for (c of key){
        if (!map[c] && c!=" "){
            map[c]=String.fromCharCode(ck++)
            
        }
    }
    console.log(map)
    s=[]
    for (c of message){
        s.push(c==" "? " " :map[c] )
    }
    return s.join("")
};