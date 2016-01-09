#!/usr/bin/env node

var through2 = require('through2');
var nljson = require('./nljson');
var timestream = require('timestream');
var argv = require('yargs').argv;

var stream = process.stdin.pipe(nljson());

if (argv.bole) {
	stream = stream.pipe(through2.obj(function (e, _, cb) {
		e._t = new Date(e.time).valueOf();
		this.push(e);
		cb();
	}));
}

var timestream = timestream(stream);

var aggregates = ['sum', 'mean', 'mode', 'median', 'variance', 'stdev', 'min', 'max', 'count', 'first', 'last', 'sample'];

aggregates.forEach(function (option) {
	if (argv[option]) {
		timestream = timestream[option](argv[option]);
	}
});

timestream.pipe(through2.obj(function (e, _, cb) {
	this.push(JSON.stringify(e));
	this.push("\n");
	cb();
})).pipe(process.stdout);
