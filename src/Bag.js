/**
 * Bag data structure
 *
 * @class Bag
 * @constructor
 */

module.exports = function() {
  
  /**
   * The array of items in the bag
   *
   * @private
   * @property _items
   * @type {Array}
   */

   var _items = [];

  /**
   * Adds an item to the bag
   *
   * @method add
   * @param {Object} item Adds an item to the bag
   */
  var add = function(item) {
      _items.push(item);
  };

  /**
   * Checks whether the bag is empty
   *
   * @method isEmpty
   * @return {Boolean} Returns true if the bag is empty
   */
  var isEmpty = function() {
      
  };

  /**
   * Returns the number of items in the bag
   *
   * @method size
   * @return {Number} Returns number of items in the bag
   */
  var size = function() {
      
  };

  return {
    size: size,
    add: add,
    isEmpty: isEmpty,
    items: _items
  };

};