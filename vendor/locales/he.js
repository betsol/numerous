(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('he', function pluralize_he(n) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length;
        if (typeof n === "string") n = parseInt(n, 10);
        if (i === 1 && v === 0) return "one";
        if (i === 2 && v === 0) return "two";
        if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0) return "many";
        return "other"
    });
}).call(this);