#!/usr/bin/nodejs

var http = require ('http');

http.createServer (
	(req, res) => {

		res.writeHead (200);
		res.end ('Hello World 5');

	}
).listen (8080);
