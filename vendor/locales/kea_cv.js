(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('kea_cv', function pluralize_kea_cv(n /**/ ) {
        return "other"
    });
}).call(this);