(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('sr_latn_xk', function pluralize_sr_latn_xk(n /**/ ) {
        return "other"
    });
}).call(this);