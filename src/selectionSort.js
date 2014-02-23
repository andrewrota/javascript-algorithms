var util = require('../src/util');

/**
 * Selection sort is an O(n^2) algorithm for sorting.
 * It iterates through the array and each time finds the smallest
 * item and switches it with the first item.
 *
 * Time does not depend on the initial order
 * of the items in the array
 *
 * @class selectionSort
 * @param {Array} arr The array to sort
 * @param {String} key The key to sort by values in objects in the array
 * @return {Array} Returns the sorted array
 */
module.exports = function (arr, key) {
    var length = arr.length;
    for (var i = 0; i < length; i++) {
        var smallest = i;
        for (var j = i + 1; j < length; j++) {
            if (key) {
                if (arr[j][key] < arr[smallest][key]) {
                    smallest = j;
                }
            } else {
                if (arr[j] < arr[smallest]) {
                    smallest = j;
                }
            }
        }
        arr = util.swap(arr, i, smallest);
    }
    return arr;
};