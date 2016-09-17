(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('bm_ml', function pluralize_bm_ml(n /**/ ) {
        return "other"
    });
}).call(this);