(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('am', function pluralize_am(n /*``*/ ) {
        var i = Math.floor(Math.abs(n));
        if (typeof n === "string") n = parseInt(n, 10);
        if (i === 0 || n === 1) return "one";
        return "other"
    });
}).call(this);