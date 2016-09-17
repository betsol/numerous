(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ksh_de', function pluralize_ksh_de(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 0) return "zero";
        if (n === 1) return "one";
        return "other"
    });
}).call(this);