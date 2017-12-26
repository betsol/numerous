(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('is_is', function pluralize_is_is(n /*``*/ ) {
        var i = Math.floor(Math.abs(n)),
            t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ""), 10) || 0;
        if (typeof n === "string") n = parseInt(n, 10);
        if (t === 0 && i % 10 === 1 && !(i % 100 === 11) || !(t === 0)) return "one";
        return "other"
    });
}).call(this);