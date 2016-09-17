(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('cy', function pluralize_cy(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 0) return "zero";
        if (n === 1) return "one";
        if (n === 2) return "two";
        if (n === 3) return "few";
        if (n === 6) return "many";
        return "other"
    });
}).call(this);