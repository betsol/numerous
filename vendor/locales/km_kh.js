(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('km_kh', function pluralize_km_kh(n /**/ ) {
        return "other"
    });
}).call(this);