var chai = require('chai');
var assert = chai.assert;
var QuickFind = require('../src/QuickFindCollection');
var Bag = require('../src/Bag');
var Queue = require('../src/Queue');
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
      assert.isArray(bag.items);
    });
    it('should be able to add item to bag', function() {
      var bag = new Bag();
      var itemToAdd = 'Test';
      bag.add(itemToAdd);
      assert.include(bag.items, itemToAdd);
    });
    it('should be able to add two items to bag', function() {
      var bag = new Bag();
      var firstItemToAdd = 'Test';
      var secondItemToAdd = 123;
      bag.add(firstItemToAdd);
      assert.include(bag.items, firstItemToAdd);
      bag.add(secondItemToAdd);
      assert.include(bag.items, firstItemToAdd);
      assert.include(bag.items, secondItemToAdd);
    });
    it('should be able to check if bag is empty', function() {
      var bag = new Bag();
      assert.isTrue(bag.isEmpty());
    });
    it('should be able to check if bag is not empty', function() {
      var bag = new Bag();
      var itemToAdd = 'Test';
      bag.add(itemToAdd);
      assert.isFalse(bag.isEmpty());
    });
    it('should be able to check size of bag when empty', function() {
      var bag = new Bag();
      assert.equal(bag.size(), 0);
    });
    it('should be able to check size of bag when it has two items', function() {
      var bag = new Bag();
      var firstItemToAdd = 'Test';
      var secondItemToAdd = 123;
      bag.add(firstItemToAdd);
      bag.add(secondItemToAdd);
      assert.equal(bag.size(), 2);
    });
  });
  describe('Queue', function(){
    it('should be a function', function() {
      assert.isFunction(Queue);
    });
    it('should have enqueue method', function() {
      var queue = new Queue();
      assert.isFunction(queue.enqueue);
    });
    it('should have dequeue method', function() {
      var queue = new Queue();
      assert.isFunction(queue.dequeue);
    });
    it('should have isEmpty method', function() {
      var queue = new Queue();
      assert.isFunction(queue.isEmpty);
    });
    it('should have size method', function() {
      var queue = new Queue();
      assert.isFunction(queue.size);
    });
    it('should have internal array defined', function() {
      var queue = new Queue();
      assert.isArray(queue.items);
    });
    it('should be able to enqueue item', function() {
      var queue = new Queue();
      var itemToEnqueue = 'Test';
      queue.enqueue(itemToEnqueue);
      assert.include(queue.items, itemToEnqueue);
    });
    it('should be able to enqueue two items', function() {
      var queue = new Queue();
      var firstItemToEnqueue = 'Test';
      var secondItemToEnqueue = 123;
      queue.enqueue(firstItemToEnqueue);
      assert.include(queue.items, firstItemToEnqueue);
      queue.enqueue(secondItemToEnqueue);
      assert.include(queue.items, firstItemToEnqueue);
      assert.include(queue.items, secondItemToEnqueue);
    });
    it('should be able to check if queue is empty', function() {
      var queue = new Queue();
      assert.isTrue(queue.isEmpty());
    });
    it('should be able to check if queue is not empty', function() {
      var queue = new Queue();
      var itemToEnqueue = 'Test';
      queue.enqueue(itemToEnqueue);
      assert.isFalse(queue.isEmpty());
    });
    it('should be able to check size of queue when empty', function() {
      var queue = new Queue();
      assert.equal(queue.size(), 0);
    });
    it('should be able to check size of queue when it has two items', function() {
      var queue = new Queue();
      var firstItemToEnqueue = 'Test';
      var secondItemToEnqueue = 123;
      queue.enqueue(firstItemToEnqueue);
      queue.enqueue(secondItemToEnqueue);
      assert.equal(queue.size(), 2);
    });
    it('should be able to dequeue an item', function() {
      var queue = new Queue();
      var itemToEnqueue = 'Test';
      queue.enqueue(itemToEnqueue);
      assert.include(queue.items, itemToEnqueue);
      var itemDequeued = queue.dequeue();
      assert.deepEqual(itemDequeued, itemToEnqueue);
    });
  });
});