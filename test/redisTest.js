var should = require('chai').should();
var request = require('supertest');
var express = require('express');

var url = "http://localhost:3000";
 
describe('GET /set', function(){
  it('should set the key', function(done){
    request(url)
	.get('/set')
	.expect(function(err, res) {
		//console.log("Came inside1:" + res.text);
	})
	.end(function(err, res) {		
		//expect(res.text).to.equal('value is set2');
		//response = res;
		res.text.should.equal('value is set');
		//console.log("Came inside12:" + res.text);
		done();
	});
      
  })
})

describe('GET /get', function(){
  it('should get the key from redis', function(done){
    request(url)
      .get('/get')
      .expect(function(err, res) {
			//console.log("Came inside21:" + res.text);
		})
      .end(function(err, res) {
      	//console.log("Came inside22:" + res.text);
      	//expect(res.text).to.equal('NCSU2');
      	res.text.should.equal('NCSU');
      	//console.log("Came inside23:" + res.text);
      	done();
      })
  })
})