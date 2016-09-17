(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ga_ie', function pluralize_ga_ie(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 1) return "one";
        if (n === 2) return "two";
        if (n === Math.floor(n) && n >= 3 && n <= 6) return "few";
        if (n === Math.floor(n) && n >= 7 && n <= 10) return "many";
        return "other"
    });
}).call(this);