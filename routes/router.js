const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res) => {
	res.send("get request received")
});


router.get('/charities', (req, res) => {
	res.send("get request received")
	// db.Charity.find({}).
	// 	then(results => {
	// 		// console.log(" get response sent")
	// 		res.json(results);
	// 	})

});

module.exports = router;

//https://appdividend.com/2017/06/28/mern-stack-tutorial/