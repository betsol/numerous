(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('lag', function pluralize_lag(n) {
        var i = Math.floor(Math.abs(n));
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 0) return "zero";
        if ((i === 0 || i === 1) && !(n === 0)) return "one";
        return "other"
    });
}).call(this);