const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/charities', (req, res) => {
	console.log("get request received")
	db.Charity.find({}).
		then(results => {
			console.log(" get response sent")
			// res.json(results);
		})
});

module.exports = router;