(function() {
  'use strict';
  var myApp = require("../app/maxMin.js");

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });
      it('should return [-6, 51] for [-6, 8, 6, 51, 7, 41, 9, 30, 2]', function () {
        expect(myApp.findMinMax([-6, 8, 6, 51, 7, 41, 9, 30, 2])).toEqual([-6, 51]);
      });
      it('should return [-20, -1] for [-6, -8, -6, -20, -7, -1]', function () {
        expect(myApp.findMinMax([-6, -8, -6, -20, -7, -1])).toEqual([-20, -1]);
      });
      it('should return [-1, 0] for [0, -1]', function () {
        expect(myApp.findMinMax([0, -1])).toEqual([-1, 0]);
      });


    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])).toEqual([4]);
      });


    });

  });

})();