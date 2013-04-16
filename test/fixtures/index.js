'use strict';

var readFile = require('fs').readFileSync
  , path = require('path');

/**
 * Small helper function for reading out files.
 *
 * @param {String} file The file name that should be read without extension.
 * @returns {Buffer} The response the mockup server should give for the command
 * @api private
 */
function read(file) {
  return readFile(path.resolve(__dirname, file + '.out'));
}

//
// A simple object where the key is the command that will be received by the
// server and the value is the output it should return to the socket.
//
module.exports = {
  'show info': read('showinfo'),
  'show stat': read('showstat'),
  'show stat -1 -1 -1': read('showstatall'),
  'show sess': read('showsess')
};