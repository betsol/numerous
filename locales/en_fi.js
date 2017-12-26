(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('en_fi', function pluralize_en_fi(n /*``*/ ) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length;
        if (typeof n === "string") n = parseInt(n, 10);
        if (i === 1 && v === 0) return "one";
        return "other"
    });
}).call(this);