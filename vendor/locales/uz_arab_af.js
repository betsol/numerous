(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('uz_arab_af', function pluralize_uz_arab_af(n /**/ ) {
        return "other"
    });
}).call(this);