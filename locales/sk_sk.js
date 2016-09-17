(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('sk_sk', function pluralize_sk_sk(n /**/ ) {
        var i = Math.floor(Math.abs(n)),
            v = n.toString().replace(/^[^.]*\.?/, "").length;
        if (typeof n === "string") n = parseInt(n, 10);
        if (i === 1 && v === 0) return "one";
        if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0) return "few";
        if (!(v === 0)) return "many";
        return "other"
    });
}).call(this);