/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    flowerbed.unshift(0);
    flowerbed.push(0)
    if (n==0){
        return true
    }
    for (i=1;i<flowerbed.length-1;i++){
        if(flowerbed[i]==0 && flowerbed[i-1]==0 && flowerbed[i+1]==0){
                n--
                flowerbed[i]=1
                if (n==0){
                    return true
                }
        }
            }
             return false

            }
            
        


