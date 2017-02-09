var exports = module.exports = {}; 


var exports = module.exports={};

var arr =[2,4,6,8,10];
var aritCount=0;
var geoCount=0;
    function aritGeo(){
        for (var i=0;i<arr.length-2;i++){
             if(arr[i+1]-arr[i]===arr[i+2]-arr[i+1]){
                 aritCount++;
            }
            else if(arr[i+1]/arr[i] ===arr[i+2]/arr[i+1]){
                 geoCount++;
            }
            else return "-1";
        }
         if(aritCount===arr.length-2)
             return "Arithmatic";
         else if(geocount===arr.length-2)
             return "Geometric";
     }    
 return(aritGeo());