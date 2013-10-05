var chai = require('chai');
var assert = chai.assert;
var QuickFind = require('../src/QuickFindCollection');
var Bag = require('../src/Bag');
describe('Dynamic Connectivity', function(){
  describe('Quickfind', function(){
    it('should find connected items', function(){
      var network = new QuickFind(10);
      assert.equal(network.connected(4,4), true);
      assert.equal(network.connected(4,3), false);
      network.union(4,3);
      network.union(3,8);
      network.union(6,5);
      network.union(9,4);
      network.union(2,1);
      assert.equal(network.connected(4,4), true);
      assert.equal(network.connected(4,3), true);
      assert.equal(network.connected(3,4), true);
      assert.equal(network.connected(0,7), false);
      assert.equal(network.connected(4,8), true);
      assert.equal(network.connected(3,9), true);
    });
  });
});
describe('Basic Data Structures', function(){
  describe('Bag', function(){
    it('should be a function', function() {
      assert.isFunction(Bag);
    });
    it('should have add method', function() {
      var bag = new Bag();
      assert.isFunction(bag.add);
    });
    it('should have isEmpty method', function() {
      var bag = new Bag();
      assert.isFunction(bag.isEmpty);
    });
    it('should have size method', function() {
      var bag = new Bag();
      assert.isFunction(bag.size);
    });
    it('should have internal array defined', function() {
      var bag = new Bag();
      assert.isDefined(bag.items);
    });
  });
});