(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('si', function pluralize_si(n /*``*/ ) {
        var i = Math.floor(Math.abs(n)),
            f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 0 || n === 1 || i === 0 && f === 1) return "one";
        return "other"
    });
}).call(this);