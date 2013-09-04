var assert = require('assert');
var QuickFind = require('../src/QuickFind');
describe('Dynamic Connectivity', function(){
  describe('Quickfind', function(){
    it('should unite items', function(){
      var quickFind = new QuickFind(5);
      quickFind.union(4,3);
    });
    it('should find connected items', function(){
      var quickFind = new QuickFind(9);
      quickFind.union(4,3);
      quickFind.union(3,8);
      quickFind.union(6,5);
      quickFind.union(9,4);
      quickFind.union(2,1);
      assert.equal(quickFind.connected(4,3), true);
      assert.equal(quickFind.connected(3,4), true);
      assert.equal(quickFind.connected(0,7), false);
      assert.equal(quickFind.connected(4,8), true);
    });
  });
});