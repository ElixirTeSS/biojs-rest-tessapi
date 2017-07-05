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
  describe('#EventsApi()', function(){
    it('should return two API actions', function(){
    	var api = new tessapi.EventsApi(); // Allocate the API class we're going to use.
    	api.should.exist()
    	api.eventsJsonGet.should.exist()
    	api.eventsSlugJsonGet.should.exist()
    });
  });
});
