#!/usr/bin/env node
var transformer = require('dat-transformer');
var conv = require('./');

// run stock conversion tests, and try expected input/output pairs
var test = transformer.test.conversion(conv, [
  [new Date("2014-05-07T01:10:45.000Z"), "2014-05-07T01:10:45.000Z"]
])
