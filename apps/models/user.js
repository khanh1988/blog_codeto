var q = require("q");
var db = require("../common/database");

var conn = db.getConnection();

function addUser(user){
	if(user){
		var defer = q.defer();

		var query = conn.query('INSERT INTO users SET ?', user, function (err, results) {
		  if (err){
		  	defer.reject(err);
		  }else{
		  	defer.resolve(results);
		  }
		  // Neat!
		});
		return defer.promise;
	}
	return false;
}

function getUserByEmail(email){
	if(email) {
			var defer = q.defer();

			 var query = conn.query('SELECT * FROM users WHERE ?', {email: email}, function(err,result){
				if(err){
					defer.reject(err);
				}else{
					defer.resolve(result);
				}
			
			 });

			return defer.promise;
	}
	return false;
}

function getAllUsers() {
		var defer = q.defer();

		var query = conn.query('SELECT * FROM users', function (err, users) {
		  if (err){
		  	defer.reject(err);
		  }else{
		  	defer.resolve(users);
		  }
		  // Neat!
		});
		return defer.promise;
	
	return false;

}

module.exports = {
	addUser: addUser,
	getUserByEmail: getUserByEmail,
	getAllUsers: getAllUsers
}