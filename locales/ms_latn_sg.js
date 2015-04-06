(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ms_latn_sg', function pluralize_ms_latn_sg(n) {
        return "other"
    });
}).call(this);