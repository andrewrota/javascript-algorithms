/**
 * isSorted checks if an array is sorted.
 * By default it just compares values in array.  The optional
 * key parameter can compare values of a key in an array
 * of objects.
 *
 * @class isSorted
 * @param {Array} arr The array to check
 * @param {String} key The key to sort by values in objects in the array
 * @return {Boolean} Returns whether the array is sorted
 */
module.exports = function (arr, key) {
    var _sorted = true;

    arr.forEach(function (value, index, array) {
        if (array[index+1]) {
            if (key) {
                if (array[index][key] > array[index + 1][key]) {
                    _sorted = false;
                }
            } else {
                if (array[index] > array[index + 1]) {
                    _sorted = false;
                }
            }
        }
    });

    return _sorted;
};