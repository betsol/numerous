(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('mt_mt', function pluralize_mt_mt(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 1) return "one";
        if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10) return "few";
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19) return "many";
        return "other"
    });
}).call(this);