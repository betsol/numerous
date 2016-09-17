(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('sg_cf', function pluralize_sg_cf(n /**/ ) {
        return "other"
    });
}).call(this);