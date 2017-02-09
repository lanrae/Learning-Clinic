
module.exports = {
  findMinMax: function(y) {
              var posMax = 0;
              var posMin = 0;
              var minMaxArray = [];
              for (var i = 0; i < y.length; i ++) {
                  if (y[i] > y[posMax]) {
                      posMax = i; 
                  }
              }
              for (i = 0; i < y.length; i++) {
                  if (y[i] < y[posMin]) {
                      posMin = i;
                  }
              }
              if (y[posMax] == y[posMin]){
                  minMaxArray.push(y[posMin]);
              } else {
                  minMaxArray.unshift(y[posMin]);
                  minMaxArray.push(y[posMax]);
              }
              return minMaxArray;
  }
}

//signed By Fawaz Bello