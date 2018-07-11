#!/usr/bin/nodejs

var http = require ('http');

http.createserver (
	(req, res) => {
		
		res.writeHead (200);
		res.end ('Hello World');

	}
).listen (8080);
