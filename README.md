# biojs-rest-tessapi

[![NPM version](http://img.shields.io/npm/v/biojs-rest-tessapi.svg)](https://www.npmjs.org/package/biojs-rest-tessapi) 
[![Build Status](https://secure.travis-ci.org/njall/biojs-rest-tessapi.png?branch=master)](http://travis-ci.org/njall/biojs-rest-tessapi) 

> JS client to interface with the TeSS Rest API. Retrieve a list of metedata about upcoming Life science events, training materials, and other training opportunities.

## Getting Started
Install the module with: `npm install biojs-rest-tessapi`

```javascript
var app = require("biojs-rest-tessapi");
var events_api = new app.EventsApi();
var materials_api = new app.MaterialsApi();
```

## Documentation

### .EventsApi()

The 'EventsAPI' class has methods for retrieving all events matching a certain criteria (eventsJsonGet()) and retrieving a single record (eventsSlugJsonGet())

#### .eventsJsonGet()
**Parameter**: `query`
**Type**: `Hash`
**Example**: `{"country[]": ["United Kingdom", "Australia"]},
			   "scientific_topics[]": ["RNA-SEQ","Bioinformatics"]`

How to use this method

```javascript
var app = require("biojs-rest-tessapi");

var api = new app.EventsApi(); // Allocate the API class we're going to use.

api.eventsJsonGet(
	{
		"q": "RNA-SEQ",
		"country[]": ["United Kingdom", "Belgium"]
	}, //see lib/api/EventsApi.js for full params options
	function(error, data, response){ 
		console.log(data)
	}
)
```

#### .eventsSlugJsonGet()

**Parameter**: `slug`
**Type**: `String`
**Example**: `"elixir-board-meeting-bergen"`


## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/njall/biojs-rest-tessapi/issues).

## License 

The MIT License

Copyright (c) 2017, Niall Beard

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
