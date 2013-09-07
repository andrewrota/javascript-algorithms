var assert = require('assert');
var QuickFind = require('../src/QuickFindCollection');
describe('Dynamic Connectivity', function(){
  describe('Quickfind', function(){
    it('should find connected items', function(){
      var network = new QuickFind(10);
      network.union(4,3);
      network.union(3,8);
      network.union(6,5);
      network.union(9,4);
      network.union(2,1);
      assert.equal(network.connected(4,3), true);
      assert.equal(network.connected(3,4), true);
      assert.equal(network.connected(0,7), false);
      assert.equal(network.connected(4,8), true);
      assert.equal(network.connected(3,9), true);
    });
  });
});