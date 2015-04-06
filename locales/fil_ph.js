(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('fil_ph', function pluralize_fil_ph(n) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length,
            f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
        if (typeof n === "string") n = parseInt(n, 10);
        if (v === 0 && (i === 1 || i === 2 || i === 3 || v === 0 && (!(i % 10 === 4 || i % 10 === 6 || i % 10 === 9) || !(v === 0) && !(f % 10 === 4 || f % 10 === 6 || f % 10 === 9)))) return "one";
        return "other"
    });
}).call(this);