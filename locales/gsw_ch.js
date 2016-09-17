(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('gsw_ch', function pluralize_gsw_ch(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 1) return "one";
        return "other"
    });
}).call(this);