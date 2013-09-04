/**
 * QuickFind algorithm for
 *
 * @class QuickFind
 * @constructor
 */
module.exports = function(count) {

  /**
   * The array of ids is populated with consecutive integers
   * based on the count passed into the constructor.
   *
   * @private
   * @property ids
   * @type {Array}
   */
  var _ids = [];
  for(var i = 0; i<count; i++) {
    _ids.push(i);
  }

  /**
   * Connects two items
   *
   * @method union
   * @param {Int} p First item to join
   * @param {Int} q Second item to join
   */
  var union = function(p, q) {
    if(connected(p, q)) {
      return;
    }
    var pId = _ids[p];
    var qId = _ids[q];
    var i = _ids.length;
    while(i) {
      if(_ids[i] === pId) {
        _ids[i] = qId;
      }
      i--;
    }
  };

  /**
   * Checks whether two items are connected
   *
   * @method connected
   * @param {Int} p First item to join
   * @param {Int} q Second item to join
   * @return {Boolean} connected Returns true if the two items are connected
   */
  var connected = function(p, q) {
    return _ids[p] === _ids[q];
  };

  return {
    length: _ids.length,
    union: union,
    connected: connected
  };
};