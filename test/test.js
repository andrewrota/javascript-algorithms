var assert = require('assert');
var quickFind = require('../src/QuickFind');
describe('Quickfind', function(){
  it('should add', function(){
    assert.equal(quickFind.add(1), 1);
  });
});
