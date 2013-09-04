module.exports = function(count) {
  var ids = [];
  for(var i = 0; i<count; i++) {
    ids.push(i);
  }
  var add = function(n) {
    ids.push(n);
    return ids;
  };
  var union = function(p, q) {
    if(connected(p, q)) {
      return;
    }
    var pId = ids[p];
    var qId = ids[q];
    for(var i = 0; i<ids.length; i++) {
      if(ids[i] === pId) {
        ids[i] = qId;
      }
    }
  };
  var connected = function(p, q) {
    return ids[p] === ids[q];
  };
  return {
    add: add,
    length: ids.length,
    union: union,
    connected: connected
  };
};