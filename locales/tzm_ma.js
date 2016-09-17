(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('tzm_ma', function pluralize_tzm_ma(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99) return "one";
        return "other"
    });
}).call(this);