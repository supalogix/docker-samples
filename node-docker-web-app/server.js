"use strict"

var express = require("express")
var cors = require("cors");
var bodyParser = require("body-parser");

var PORT = 8080;

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.get("/", function(request,response) {
	response.json({
		_links: {
			"accounts": {
				href: "/api/v1/accounts"
			}
		}
	});
});

app.listen(PORT, function() {
	console.log("Running on http://localhost:" + PORT);
});
