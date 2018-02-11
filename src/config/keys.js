// Node.env is an environment variable that decides whether we are in dev or prod
if(process.env.NODE_ENV === "production") {
	// return production set of keys
	module.exports = require('./prod');
} else {
	// return dev set of keys
	module.exports = require('./dev');
	// we export and import so that we dont need to change the location of keys in other files (since other files call keys.js)
}