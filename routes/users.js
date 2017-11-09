var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/register',(req,res,next)=>{
	res.render('register',{})
});

router.post('/registerProcess',(req,res,next)=>{
	var name = req.body.name
	var email = req.body.email
	var password = req.body.password
	var selectQuery = 'SELECT * FROM users WHERE email = ?;';
	connection.query(selectQuery,[email],(error,results)=>{
		console.log(results)
		if(results.length != 0){
			res.redirect('/register')
		}else{
			var hash = bcrypt.hashSync(password)
			var insertQuery = 'INSERT INTO users(name,email,password) VALUES (?,?,?);';
			connection.query(insertQuery,[name,email,hash],(error)=>{
				if(error){
					throw error
				}
				res.redirect('/')
			});
		};
	});

});

module.exports = router;
