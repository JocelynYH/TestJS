#!/usr/bin/nodejs

var http = require ('http');

var mysql = require ('mysql');

var pool = mysql.createPool ({ process.env.DB_HOST, process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_DATABASE });

http.createServer (

	(req, res) => {

		res.writeHead (200);

		var abc = pool.query('select body from messages',

			(error, results, fields) => {

				if (error) { throw error; res.end ('there was a SQL error.'); }

				res.end (results[0]);

			}

		);

	}
).listen (8080);
