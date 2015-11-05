var assert = require('assert');


// This is a root level before hook
before(function () {
  console.log("Root level - This will be called before every test in every file");
});

// This is root level after hook
after(function () {
  console.log("Root level - This will be called after every test in every file");
});




describe('Mocha Hooks', function() {
  describe('Block and test level hooks', function () {
    

      // Block level before hook
      before(function () {
        console.log("Block level - Runs before all tests in this block");
      });


      // Block level after hook
      after(function () {
        console.log("Block level - Runs after all tests in this block");
      });


      // Test level before hook
      beforeEach(function () {
        console.log("Test level - Runs before each test in this block");
      });


      // Test level after hook 
      afterEach(function () {
        console.log("Test level - Runs after each test in this block");
      });


      //Test case 1
      it('should return -1 when the value is not present', function () {
        assert.equal(-1, [1,2,3].indexOf(6));
        assert.equal(-1, [1,2,3].indexOf(0));
      });


      //Test case 2
      it('should return 1 when the value is present', function () {
        assert.equal(0, [1,2,3].indexOf(1));
        assert.equal(1, [1,2,3].indexOf(2));
      });
  });
});
