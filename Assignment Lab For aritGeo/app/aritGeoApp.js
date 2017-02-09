module.exports = {
  aritGeo: function(arr) {
    var length = arr.length;
    var diff1 = arr[1] - arr[0];
    var diff2 = arr[length - 1] - arr[length -2];
    var ratio1 = arr[1] / arr[0];
    var ratio2 = arr[length - 1] / arr[length -2];
    if (length === 0) {
      return 0;
    } else if (diff1 === diff2) {
      return "Arithmetic";
    } else if (ratio1 === ratio2) {
      return "Geometric";
    } else {
      return -1;
    }
  }
} 


//signed By Fawaz Bello