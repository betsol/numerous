(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('sah_ru', function pluralize_sah_ru(n) {
        return "other"
    });
}).call(this);