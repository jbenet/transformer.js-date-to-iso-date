#!/usr/bin/env node
var tTest = require('transformer-test');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = tTest.conversion(conv, [
  [new Date("2014-05-07T01:10:45.000Z"), "2014-05-07T01:10:45.000Z"]
])
