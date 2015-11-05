var assert = require('assert');

setTimeout(function() {
	describe('Array', function() {
	  describe('#indexOf()', function () {
	    it('should return -1 when the value is not present', function () {
	      assert.equal(-1, [1,2,3].indexOf(6));
	      assert.equal(-1, [1,2,3].indexOf(0));
	    });
	  });
	});
 run();
}, 5000);
