/*
 * biojs-rest-tessapi
 * https://github.com/njall/biojs-rest-tessapi
 *
 * Copyright (c) 2015 Niall Beard
 * Licensed under the MIT license.
 */

// chai is an assertion library
var chai = require('chai');

// @see http://chaijs.com/api/assert/
var assert = chai.assert;

// register alternative styles
// @see http://chaijs.com/api/bdd/
chai.expect();
chai.should();

// requires your main app (specified in index.js)
var tessapi = require('../');

describe('biojs-rest-tessapi module', function(){
  describe('#hello()', function(){
    it('should return a hello', function(){

      assert.equal(tessapi.hello('biojs'), ("hello biojs"));
      
      // alternative styles
      tessapi.hello('biojs').should.equal("hello biojs");
    });
  });
});
