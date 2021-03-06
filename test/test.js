var chai = require('chai');
var assert = chai.assert;
var QuickFind = require('../src/QuickFindCollection');
var Bag = require('../src/Bag');
var Queue = require('../src/Queue');
var Stack = require('../src/Stack');
var util = require('../src/util');
var selectionSort = require('../src/selectionSort');
var insertionSort = require('../src/insertionSort');
var mergeSort = require('../src/mergeSort');

describe('Dynamic Connectivity', function () {
  describe('Quickfind', function () {
    it('should find connected items', function () {
      var network = new QuickFind(10);
      assert.equal(network.connected(4, 4), true);
      assert.equal(network.connected(4, 3), false);
      network.union(4, 3);
      network.union(3, 8);
      network.union(6, 5);
      network.union(9, 4);
      network.union(2, 1);
      assert.equal(network.connected(4, 4), true);
      assert.equal(network.connected(4, 3), true);
      assert.equal(network.connected(3, 4), true);
      assert.equal(network.connected(0, 7), false);
      assert.equal(network.connected(4, 8), true);
      assert.equal(network.connected(3, 9), true);
    });
  });
});
describe('Basic Data Structures', function () {
  describe('Bag', function () {
    it('should be a function', function () {
      assert.isFunction(Bag);
    });
    it('should have add method', function () {
      var bag = new Bag();
      assert.isFunction(bag.add);
    });
    it('should have isEmpty method', function () {
      var bag = new Bag();
      assert.isFunction(bag.isEmpty);
    });
    it('should have size method', function () {
      var bag = new Bag();
      assert.isFunction(bag.size);
    });
    it('should have internal array defined', function () {
      var bag = new Bag();
      assert.isArray(bag.items);
    });
    it('should be able to add item to bag', function () {
      var bag = new Bag();
      var itemToAdd = 'Test';
      bag.add(itemToAdd);
      assert.include(bag.items, itemToAdd);
    });
    it('should be able to add two items to bag', function () {
      var bag = new Bag();
      var firstItemToAdd = 'Test';
      var secondItemToAdd = 123;
      bag.add(firstItemToAdd);
      assert.include(bag.items, firstItemToAdd);
      bag.add(secondItemToAdd);
      assert.include(bag.items, firstItemToAdd);
      assert.include(bag.items, secondItemToAdd);
    });
    it('should be able to check if bag is empty', function () {
      var bag = new Bag();
      assert.isTrue(bag.isEmpty());
    });
    it('should be able to check if bag is not empty', function () {
      var bag = new Bag();
      var itemToAdd = 'Test';
      bag.add(itemToAdd);
      assert.isFalse(bag.isEmpty());
    });
    it('should be able to check size of bag when empty', function () {
      var bag = new Bag();
      assert.equal(bag.size(), 0);
    });
    it('should be able to check size of bag when it has two items', function () {
      var bag = new Bag();
      var firstItemToAdd = 'Test';
      var secondItemToAdd = 123;
      bag.add(firstItemToAdd);
      bag.add(secondItemToAdd);
      assert.equal(bag.size(), 2);
    });
  });
  describe('Queue', function () {
    it('should be a function', function () {
      assert.isFunction(Queue);
    });
    it('should have enqueue method', function () {
      var queue = new Queue();
      assert.isFunction(queue.enqueue);
    });
    it('should have dequeue method', function () {
      var queue = new Queue();
      assert.isFunction(queue.dequeue);
    });
    it('should have isEmpty method', function () {
      var queue = new Queue();
      assert.isFunction(queue.isEmpty);
    });
    it('should have size method', function () {
      var queue = new Queue();
      assert.isFunction(queue.size);
    });
    it('should have internal array defined', function () {
      var queue = new Queue();
      assert.isArray(queue.items);
    });
    it('should be able to enqueue item', function () {
      var queue = new Queue();
      var itemToEnqueue = 'Test';
      queue.enqueue(itemToEnqueue);
      assert.include(queue.items, itemToEnqueue);
    });
    it('should be able to enqueue two items', function () {
      var queue = new Queue();
      var firstItemToEnqueue = 'Test';
      var secondItemToEnqueue = 123;
      queue.enqueue(firstItemToEnqueue);
      assert.include(queue.items, firstItemToEnqueue);
      queue.enqueue(secondItemToEnqueue);
      assert.include(queue.items, firstItemToEnqueue);
      assert.include(queue.items, secondItemToEnqueue);
    });
    it('should be able to check if queue is empty', function () {
      var queue = new Queue();
      assert.isTrue(queue.isEmpty());
    });
    it('should be able to check if queue is not empty', function () {
      var queue = new Queue();
      var itemToEnqueue = 'Test';
      queue.enqueue(itemToEnqueue);
      assert.isFalse(queue.isEmpty());
    });
    it('should be able to check size of queue when empty', function () {
      var queue = new Queue();
      assert.equal(queue.size(), 0);
    });
    it('should be able to check size of queue when it has two items', function () {
      var queue = new Queue();
      var firstItemToEnqueue = 'Test';
      var secondItemToEnqueue = 123;
      queue.enqueue(firstItemToEnqueue);
      queue.enqueue(secondItemToEnqueue);
      assert.equal(queue.size(), 2);
    });
    it('should be able to dequeue an item', function () {
      var queue = new Queue();
      var itemToEnqueue = 'Test';
      queue.enqueue(itemToEnqueue);
      assert.include(queue.items, itemToEnqueue);
      var itemDequeued = queue.dequeue();
      assert.deepEqual(itemDequeued, itemToEnqueue);
      assert.notInclude(queue.items, itemDequeued);
    });
    it('should be able to dequeue two items in FIFO order', function () {
      var queue = new Queue();
      var firstItemToEnqueue = 'Test';
      var secondItemToEnqueue = 123;
      queue.enqueue(firstItemToEnqueue);
      queue.enqueue(secondItemToEnqueue);
      assert.equal(queue.size(), 2);
      assert.include(queue.items, firstItemToEnqueue);
      assert.include(queue.items, secondItemToEnqueue);

      var itemDequeued = queue.dequeue();
      assert.deepEqual(itemDequeued, firstItemToEnqueue);
      assert.notInclude(queue.items, firstItemToEnqueue);
      assert.include(queue.items, secondItemToEnqueue);
      assert.equal(queue.size(), 1);

      itemDequeued = queue.dequeue();
      assert.deepEqual(itemDequeued, secondItemToEnqueue);
      assert.notInclude(queue.items, secondItemToEnqueue);
      assert.notInclude(queue.items, firstItemToEnqueue);
      assert.isTrue(queue.isEmpty());
    });
  });
  describe('Stack', function () {
    it('should be a function', function () {
      assert.isFunction(Stack);
    });
    it('should have push method', function () {
      var stack = new Stack();
      assert.isFunction(stack.push);
    });
    it('should have pop method', function () {
      var stack = new Stack();
      assert.isFunction(stack.pop);
    });
    it('should have isEmpty method', function () {
      var stack = new Stack();
      assert.isFunction(stack.isEmpty);
    });
    it('should have size method', function () {
      var stack = new Stack();
      assert.isFunction(stack.size);
    });
    it('should have internal array defined', function () {
      var stack = new Stack();
      assert.isArray(stack.items);
    });
    it('should be able to push item', function () {
      var stack = new Stack();
      var itemToPush = 'Test';
      stack.push(itemToPush);
      assert.include(stack.items, itemToPush);
    });
    it('should be able to push two items', function () {
      var stack = new Stack();
      var firstItemToPush = 'Test';
      var secondItemToPush = 123;
      stack.push(firstItemToPush);
      assert.include(stack.items, firstItemToPush);
      stack.push(secondItemToPush);
      assert.include(stack.items, firstItemToPush);
      assert.include(stack.items, secondItemToPush);
    });
    it('should be able to check if stack is empty', function () {
      var stack = new Stack();
      assert.isTrue(stack.isEmpty());
    });
    it('should be able to check if stack is not empty', function () {
      var stack = new Stack();
      var itemToPush = 'Test';
      stack.push(itemToPush);
      assert.isFalse(stack.isEmpty());
    });
    it('should be able to check size of stack when empty', function () {
      var stack = new Stack();
      assert.equal(stack.size(), 0);
    });
    it('should be able to check size of stack when it has two items', function () {
      var stack = new Stack();
      var firstItemToPush = 'Test';
      var secondItemToPush = 123;
      stack.push(firstItemToPush);
      stack.push(secondItemToPush);
      assert.equal(stack.size(), 2);
    });
    it('should be able to pop an item', function () {
      var stack = new Stack();
      var itemToPush = 'Test';
      stack.push(itemToPush);
      assert.include(stack.items, itemToPush);
      var itemPopped = stack.pop();
      assert.deepEqual(itemPopped, itemToPush);
      assert.notInclude(stack.items, itemPopped);
    });
    it('should be able to pop two items in LIFO order', function () {
      var stack = new Stack();
      var firstItemToPush = 'Test';
      var secondItemToPush = 123;
      stack.push(firstItemToPush);
      stack.push(secondItemToPush);
      assert.equal(stack.size(), 2);
      assert.include(stack.items, firstItemToPush);
      assert.include(stack.items, secondItemToPush);

      var itemPopped = stack.pop();
      assert.deepEqual(itemPopped, secondItemToPush);
      assert.notInclude(stack.items, secondItemToPush);
      assert.include(stack.items, firstItemToPush);
      assert.equal(stack.size(), 1);

      itemPopped = stack.pop();
      assert.deepEqual(itemPopped, firstItemToPush);
      assert.notInclude(stack.items, secondItemToPush);
      assert.notInclude(stack.items, firstItemToPush);
      assert.isTrue(stack.isEmpty());

    });
  });
});
describe('Elementary Sorts', function () {
  var unsortedArray = [56, 93, -11, 31, -20, -30, -90, 94, 93, 98, -93, 61, 97, -85, -54, -68, 4, 94, -10, 20, -6, 78, -31, -73, 88, 55, 44, -78, -27, -97, 27, 35, -91, 73, 96, 17, -74, 58, 52, 70, 68, -21, 13, 7, -71, -32, -92, 32, -34, -8];
  var sortedArray = [-97, -93, -92, -91, -90, -85, -78, -74, -73, -71, -68, -54, -34, -32, -31, -30, -27, -21, -20, -11, -10, -8, -6, 4, 7, 13, 17, 20, 27, 31, 32, 35, 44, 52, 55, 56, 58, 61, 68, 70, 73, 78, 88, 93, 93, 94, 94, 96, 97, 98];
  describe('Selection Sort', function () {
    it('should sort an array', function () {
      assert.deepEqual(selectionSort(unsortedArray), sortedArray);
      assert.ok(util.isSorted(selectionSort(unsortedArray)));
    });
    it('should sort an array that was already sorted', function () {
      assert.deepEqual(selectionSort(sortedArray), sortedArray);
      assert.ok(util.isSorted(selectionSort(sortedArray)));
    });
  });
    describe('Insertion Sort', function () {
    it('should sort an array', function () {
      assert.deepEqual(insertionSort(unsortedArray), sortedArray);
      assert.ok(util.isSorted(insertionSort(unsortedArray)));
    });
    it('should sort an array that was already sorted', function () {
      assert.deepEqual(insertionSort(sortedArray), sortedArray);
      assert.ok(util.isSorted(insertionSort(sortedArray)));
    });
  });
});
describe('Merge Sorts', function () {
  var unsortedArray = [56, 93, -11, 31, -20, -30, -90, 94, 93, 98, -93, 61, 97, -85, -54, -68, 4, 94, -10, 20, -6, 78, -31, -73, 88, 55, 44, -78, -27, -97, 27, 35, -91, 73, 96, 17, -74, 58, 52, 70, 68, -21, 13, 7, -71, -32, -92, 32, -34, -8];
  var sortedArray = [-97, -93, -92, -91, -90, -85, -78, -74, -73, -71, -68, -54, -34, -32, -31, -30, -27, -21, -20, -11, -10, -8, -6, 4, 7, 13, 17, 20, 27, 31, 32, 35, 44, 52, 55, 56, 58, 61, 68, 70, 73, 78, 88, 93, 93, 94, 94, 96, 97, 98];
  describe('Merge Sort', function () {
    it('should sort an array', function () {
      assert.deepEqual(mergeSort(unsortedArray), sortedArray);
      assert.ok(util.isSorted(mergeSort(unsortedArray)));
    });
    it('should sort an array that was already sorted', function () {
      assert.deepEqual(mergeSort(sortedArray), sortedArray);
      assert.ok(util.isSorted(mergeSort(sortedArray)));
    });
  });
});
describe('Utility Functions', function () {
  var unsortedArray = [56, 93, -11, 31, -20, -30, -90, 94, 93, 98, -93, 61, 97, -85, -54, -68, 4, 94, -10, 20, -6, 78, -31, -73, 88, 55, 44, -78, -27, -97, 27, 35, -91, 73, 96, 17, -74, 58, 52, 70, 68, -21, 13, 7, -71, -32, -92, 32, -34, -8];
  var sortedArray = [-97, -93, -92, -91, -90, -85, -78, -74, -73, -71, -68, -54, -34, -32, -31, -30, -27, -21, -20, -11, -10, -8, -6, 4, 7, 13, 17, 20, 27, 31, 32, 35, 44, 52, 55, 56, 58, 61, 68, 70, 73, 78, 88, 93, 93, 94, 94, 96, 97, 98];
  describe('isSorted Function', function () {
    it('should check if arrays are sorted', function () {
      assert.equal(util.isSorted(sortedArray), true);
      assert.equal(util.isSorted([-5, 102, 30000.1, 50102]), true);
    });
    it('should check if unsorted arrays are unsorted', function () {
      assert.equal(util.isSorted(unsortedArray), false);
      assert.equal(util.isSorted([-5, 102, 30000.1, -100000, 50102]), false);
    });
    it('should return length 1 arrays as sorted', function () {
      assert.equal(util.isSorted([1]), true);
      assert.equal(util.isSorted([0]), true);
    });
  });
  describe('swap Function', function () {
    it('should swap two items in an array', function () {
      var originalArray = [0, 1, 2, 3];
      // Swap the '3' value with the '2' value
      assert.deepEqual(util.swap(originalArray, 3, 2), [0, 1, 3, 2]);
    });
  });
});