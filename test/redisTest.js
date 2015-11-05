var should = require('chai').should();
var request = require('supertest');

var url = "http://localhost:3000";
 
describe('GET /set', function(done){
  it('should set the key', function(done){
      request(url)
	   .get('/set')
	   .expect(function(err, res) {
	    })
	   .end(function(err, res) {		
		    res.text.should.equal('value is set');	
		    done();
	   });
      
  })
})



describe('GET /get', function(done){
  it('should get the key from redis', function(done){
    request(url)
      .get('/get')
      .expect(function(err, res) {
		  })
      .end(function(err, res) {
      	 res.text.should.equal('NCSU');
      	 done();
      })
  })
})