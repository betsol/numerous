(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('az_cyrl', function pluralize_az_cyrl(n /**/ ) {
        return "other"
    });
}).call(this);