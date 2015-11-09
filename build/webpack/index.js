require('babel-core/register');
var env = require('../../config').env;
module.exports = require('./' + env + '.js');
