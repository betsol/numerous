(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ar_ps', function pluralize_ar_ps(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 0) return "zero";
        if (n === 1) return "one";
        if (n === 2) return "two";
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10) return "few";
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99) return "many";
        return "other"
    });
}).call(this);