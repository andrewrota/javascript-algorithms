var util = require('../src/util');

/**
 * Insertion sort is an algorithm for sorting.
 * O(n^2) in worst and average case, O(n) in best case.
 *
 * Running time depends on the intiial order
 * of the items in the array, and is faster if the array
 * is large an items are already almost in order
 *
 * @class insertionSort
 * @param {Array} arr The array to sort
 * @return {Array} Returns the sorted array
 */
module.exports = function (arr) {
  var length = arr.length;
  for(var i = 0; i < length; i++) {
      for(var j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
          arr = util.swap(arr, j, j - 1);
      }
  }
  return arr;
};