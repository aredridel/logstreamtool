var combiner = require('stream-combiner');
var split = require('split');
var through = require('through2');

module.exports = function NLJSON() {
    return combiner(split(), through.obj(function (e, _, cb) {
        try {
            var data = JSON.parse(e);
            this.push(data);
        } catch(x) { }
        cb();
    }));
}
