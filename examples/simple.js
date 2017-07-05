var app = require("biojs-rest-tessapi");

var api = new app.EventsApi(); // Allocate the API class we're going to use.

api.eventsJsonGet(
	{
		"q": "RNA-SEQ",
		"country[]": ["United Kingdom", "Belgium"]
	}, //see lib/api/EventsApi.js for full params options
	function(error, data, response){ 
		html = '<h1> Found ' + data.length + ' results </h1> \n'+
		'<h2> See on TeSS at ' + response.req.url + '</h2>\n'
		data.forEach(function(value){
			html = html +
						"<a href=\"" + 
						value['url'] + "\">" +
						value['title'] + "</a>\n"
		})
		rootDiv.innerText = html
	}
)
