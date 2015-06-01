var util = require('../src/util');

/**
 * Merge sort is an algorithm for sorting.
 * O(n log n) in worst and average case, O(n) in best case.
 * It splits an array in half, sorts each half recursively, and then
 * merges the results.
 *
 *
 * @class mergeSort
 * @param {Array} arr The array to sort
 * @return {Array} Returns the sorted array
 */
module.exports = function(arr) {
  var length = arr.length;
  var merge = function(a, lo, mid, hi) {
    var aux = a.slice();
    var i = lo;
    var j = mid + 1;
    for (var k = lo; k <= hi; k++) {
      if (i > mid) {
        a[k] = aux[j];
        j++;
      }
      else if (j > hi) {
        a[k] = aux[i];
        i++;
      }
      else if (aux[j] < aux[i]) {
        a[k] = aux[j];
        j++;
      }
      else {
        a[k] = aux[i];
        i++;
      }
    }
    return a;
  };
  var sort = function(a, lo, hi) {
    if(hi <= lo) {
      return;
    }
    var mid = Math.floor(lo + (hi - lo) / 2);
    // sort lo --> mid
    sort(a, lo, mid);
    // sort mid --> hi
    sort(a, mid + 1, hi);
    // merge results
    merge(a, lo, mid, hi);
    return a;
  };
  return sort(arr, 0, arr.length -1);
};