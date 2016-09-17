(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('se_se', function pluralize_se_se(n /**/ ) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 1) return "one";
        if (n === 2) return "two";
        return "other"
    });
}).call(this);