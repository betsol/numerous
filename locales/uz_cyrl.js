(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('uz_cyrl', function pluralize_uz_cyrl(n /*``*/ ) {
        return "other"
    });
}).call(this);