/**
 * Queue data structure:
 * first in, first out (FIFO)
 *
 * @class Queue
 * @constructor
 */

module.exports = function() {
  
  /**
   * The array of items in the queue
   *
   * @private
   * @property _items
   * @type {Array}
   */

   var _items = [];

  /**
   * Adds an item to the queue
   *
   * @method enqueue
   * @param {Object} item Adds an item to the queue
   */
  var enqueue = function(item) {
    _items.push(item);
  };

  /**
   * Removes the next item in FIFO order
   *
   * @method dequeue
   * @return {Object} item Returns the item in FIFO order
   */
  var dequeue = function() {
    var dequeuedItem = _items[0];
    _items.splice(0, 1);
    return dequeuedItem;
  };

  /**
   * Checks whether the queue is empty
   *
   * @method isEmpty
   * @return {Boolean} Returns true if the queue is empty
   */
  var isEmpty = function() {
      return !_items.length;
  };

  /**
   * Returns the number of items in the queue
   *
   * @method size
   * @return {Number} Returns number of items in the queue
   */
  var size = function() {
    return _items.length;
  };

  return {
    size: size,
    enqueue: enqueue,
    dequeue: dequeue,
    isEmpty: isEmpty,
    items: _items
  };

};