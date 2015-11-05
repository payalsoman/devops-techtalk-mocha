var assert = require('assert');

// This describe block specifies the name of component you want to test
describe('Basic --> Array', function() {

  // This describe block specifies functionality of the component you want to test
  describe.skip('#indexOf()', function () {

  	//Description of the test
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(6));
      assert.equal(2, [1,2,3].indexOf(3));
    });
   });


  // This describe block specifies functionality of the component you want to test
  describe('#Length', function () {

  	//Description of the test
    it('should return correct length of an array', function () {
      assert.equal(4, [1,2,3].length);
    });
  });


});
