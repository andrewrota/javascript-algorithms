/**
 * Stack data structure:
 * last in, first out (LIFO)
 *
 * @class Stack
 * @constructor
 */

module.exports = function () {

  /**
   * The array of items in the stack
   *
   * @private
   * @property _items
   * @type {Array}
   */

  var _items = [];

  /**
   * Adds an item to the stack
   *
   * @method push
   * @param {Object} item Adds an item to the stack
   */
  var push = function (item) {
    _items.push(item);
  };

  /**
   * Removes an item from the stack
   *
   * @method pop
   * @param {Object} item Removes an item from the stack
   * @return {Object} item Returns the item in LIFO order
   */
  var pop = function () {
    var lastItem = _items[_items.length - 1];
    _items.splice(_items.length - 1, 1);
    return lastItem;
  };

  /**
   * Checks whether the stack is empty
   *
   * @method isEmpty
   * @return {Boolean} Returns true if the stack is empty
   */
  var isEmpty = function () {
    return !_items.length;
  };

  /**
   * Returns the number of items in the stack
   *
   * @method size
   * @return {Number} Returns number of items in the stack
   */
  var size = function () {
    return _items.length;
  };

  return {
    push: push,
    pop: pop,
    isEmpty: isEmpty,
    size: size,
    items: _items
  };


};