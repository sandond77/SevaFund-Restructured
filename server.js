const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const db = require('./models');
const cors = require('cors');
// const axios = require('axios')
const bodyParser = require('body-parser');
const router = require('./routes/router')

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/SevaFund";
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);
console.log("mongoose status code representations: 0 = disconnected/1 = connected/ 2 = connecting/ 3 = disconnecting. ")
console.log("mongoose connection status: Current status is: ", mongoose.connection.readyState);


db.Charity.create({
	Name: "Test Charity"
	})
	.then(results => {
		console.log("creating db entry")
	})

db.Charity.find({})
	.then(results => {
		console.log("logging db search results")
		console.log(results)
	})

app.use(router)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});

