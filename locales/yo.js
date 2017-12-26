(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('yo', function pluralize_yo(n /*``*/ ) {
        return "other"
    });
}).call(this);