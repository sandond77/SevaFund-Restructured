const express = require('express');
const router = express.Router();
const db = require('../models');
const { Donor } = require('../models');
const { Charity } = require('../models');

router.get('/charities', (req, res) => {
	// res.send("get request received")
	db.Charity.find({})
		.then(results => {
			// console.log(" get response sent")
			res.json(results);
		})	
	});
	
router.get("/api/projects", (req, res) => {			
		db.Project
		.find({})
		.then(dbModel => res.json(dbModel))
		.catch(err => res.status(422).json(err));
		})
		  
		 
router.post("/api/projects", (req, res) => {
	db.Project
	.create(req.body)
	.then(dbModel => res.json(dbModel))
	.catch(err => res.status(422).json(err));
});

	//// Matches with "/api/projects/:id"
router.get("/api/projects/:id", (req, res) => {
	db.Project
	.findById(req.params.id)
	.then(dbModel => res.json(dbModel))
	.catch(err => res.status(422).json(err));
})
	
router.put("/api/projects/:id", (req, res) => {
	db.Project
	.findOneAndUpdate({ _id: req.params.id }, req.body)
	.then(dbModel => res.json(dbModel))
	.catch(err => res.status(422).json(err));
})

router.post('/donor/register', (req, res) => {
		let Email = req.body.email;
		let Password = req.body.password;
		let passwordConfirm = req.confirmPassword;

		// Validation
		// req.checkBody('Email', 'Email is required').notEmpty();
		// req.checkBody('Email', 'Email is not valid').isEmail();
		// req.checkBody('password', 'Password is required').notEmpty();
		// req.checkBody('passwordConfirm', 'Passwords do not match').equals(confirmPassword);

		// let errors = req.validationErrors();

		// if(errors){
		// 	res.redirect('/donor/register',{
		// 		errors:errors
		// 	});
		// } else {
			let newDonor = new Donor ({
				Email:Email,
				Password: Password
			});
		
			db.Donor.createDonor(newDonor, function(err, donor){
				if(err) throw err;		
				console.log('Donor created in db with its hash', donor);
			});

			res.redirect('/donors/login');
		// }
});

router.post('/charity/register', (req, res) => {
		const charityName =  req.body.name
		const email =  req.body.email
		const password = req.body.password
		const street =  req.body.street
		const city =  req.body.city
		const state =  req.body.state
		const zipcode=  req.body.zipcode
		const phoneNumber =  req.body.phoneNumber
	//confirmPassword: confirmPassword for validation 
		console.log(req.body)
		
		let newCharity = new Charity ({
			CharityName: charityName,
			Email: email,
			Password: password,
			CharityInfo: {
				Address: street,
				City: city,
				ZipCode: zipcode,
				PhoneNumber: phoneNumber,
				State: state
			}				
		});

		db.Charity.createCharity(newCharity, function(err, Charity){
			if(err) throw err;
			console.log('charity created in db', Charity);
		});

		res.redirect('/charity/login');		
});

module.exports = router;

