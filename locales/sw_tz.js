(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('sw_tz', function pluralize_sw_tz(n /*``*/ ) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length;
        if (typeof n === "string") n = parseInt(n, 10);
        if (i === 1 && v === 0) return "one";
        return "other"
    });
}).call(this);