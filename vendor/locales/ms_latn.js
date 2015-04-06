(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ms_latn', function pluralize_ms_latn(n) {
        return "other"
    });
}).call(this);