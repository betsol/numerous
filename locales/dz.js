(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('dz', function pluralize_dz(n /*``*/ ) {
        return "other"
    });
}).call(this);