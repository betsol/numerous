(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('km', function pluralize_km(n /*``*/ ) {
        return "other"
    });
}).call(this);