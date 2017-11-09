var express = require('express');
var router = express.Router();
var config = require ('../config/config');
var bcrypt = require('bcrypt-nodejs');
var request = require('request');
var mysql = require('mysql');

var connection = mysql.createConnection(config.db);





/* GET home page. */
router.get('/',(req, res, next)=>{
			
		  res.render('index', { 
		  	title: 'Express' ,
		  });
	
});

router.get('/home',(req,res,next)=>{
	res.render('home',{})
});

router.post('/routesProcess',(req,res,next)=>{
	var currentLocation = req.body.currentLocation
	console.log("hey chris")	
	var insertQuery = 'INSERT INTO routes (currentLocation) VALUES (?);';
	connection.query(insertQuery,[currentLocation])	
	if(error){
		throw error
	}else{
		res.redirect('/home?msg=done')
	}
});



module.exports = router;
