/**
 * Queue data structure
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
   * Removes the last item added to the queue
   *
   * @method dequeue
   * @return {Object} item Returns the last item add
   */
  var dequeue = function() {

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
  };

  return {
    size: size,
    enqueue: enqueue,
    dequeue: dequeue,
    isEmpty: isEmpty,
    items: _items
  };

};