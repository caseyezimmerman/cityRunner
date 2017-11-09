var express = require('express');
var router = express.Router();
var config = require ('../config/config');
var bcrypt = require('bcrypt-nodejs');
var request = require('request');
var mysql = require('mysql');

var connection = mysql.createConnection(config.db);
console.log(connection)




/* GET home page. */
router.get('/',(req, res, next)=>{
			
		  res.render('index', { 
		  	title: 'Express' ,
		  });
	
});



module.exports = router;
