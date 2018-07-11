#!/usr/bin/nodejs

var http = require ('hhtp');

http.createserver (
	(req, res) => {
		
		res.writeHead (200);
		res.end ('Hello World');

	}
).listen (8080);
