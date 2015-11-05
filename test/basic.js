var assert = require('assert');

// This describe block specifies the name of component you want to test
describe('Array', function() {

  // This describe block specifies functionality of the component you want to test
  describe.only('#indexOf()', function () {

  	//Description of the test
    it('should return -1 when the value is not present', function () {
      assert.equal(-1, [1,2,3].indexOf(6));
      assert.equal(-1, [1,2,3].indexOf(0));
    });
   });


      // This describe block specifies functionality of the component you want to test
  describe('#Length', function () {

  	//Description of the test
    it('should return correct length of an array', function () {
      assert.equal(3, [1,2,3].length);
    });
  });


});
