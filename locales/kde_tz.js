(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('kde_tz', function pluralize_kde_tz(n /**/ ) {
        return "other"
    });
}).call(this);