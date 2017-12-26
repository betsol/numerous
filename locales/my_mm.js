(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('my_mm', function pluralize_my_mm(n /*``*/ ) {
        return "other"
    });
}).call(this);