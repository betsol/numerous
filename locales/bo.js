(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('bo', function pluralize_bo(n /*``*/ ) {
        return "other"
    });
}).call(this);