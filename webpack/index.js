require('babel-core/register');
var env = process.env.NODE_ENV || 'development';
module.exports = require('./' + env + '.js');
