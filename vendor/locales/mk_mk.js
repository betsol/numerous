(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('mk_mk', function pluralize_mk_mk(n) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length,
            f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
        if (typeof n === "string") n = parseInt(n, 10);
        if (v === 0 && (i % 10 === 1 || f % 10 === 1)) return "one";
        return "other"
    });
}).call(this);