(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('az_cyrl_az', function pluralize_az_cyrl_az(n) {
        if (typeof n === "string") n = parseInt(n, 10);
        if (n === 1) return "one";
        return "other"
    });
}).call(this);