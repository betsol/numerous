(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('shi_latn_ma', function pluralize_shi_latn_ma(n) {
        var i = Math.floor(Math.abs(n));
        if (typeof n === "string") n = parseInt(n, 10);
        if (i === 0 || n === 1) return "one";
        if (n === Math.floor(n) && n >= 2 && n <= 10) return "few";
        return "other"
    });
}).call(this);