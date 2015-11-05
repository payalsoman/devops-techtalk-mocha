var assert = require('assert');
var request = require('supertest');

var url = "http://localhost:3000";
 
describe('RedisTest--> GET /set', function(done){
  it('should set the key', function(done){
      request(url)
	   .get('/set')
	   .expect(function(err, res) {
	    })
	   .end(function(err, res) {
        assert.equal(res.text, 'value is set');
		    done();
	   });
      
  })
})



describe('RedisTest--> GET /get', function(done){
  it('should get the key from redis', function(done){
    request(url)
      .get('/get')
      .expect(function(err, res) {
		  })
      .end(function(err, res) {
         assert.equal(res.text, 'NCSU');  
      	 done();
      })
  })
})