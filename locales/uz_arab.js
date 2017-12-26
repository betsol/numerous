(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('uz_arab', function pluralize_uz_arab(n /*``*/ ) {
        return "other"
    });
}).call(this);