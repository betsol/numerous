(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('kea', function pluralize_kea(n /*``*/ ) {
        return "other"
    });
}).call(this);