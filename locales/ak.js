(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ak', function pluralize_ak(n /*``*/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === Math.floor(n) && n >= 0 && n <= 1) return "one";
        return "other"
    });
}).call(this);