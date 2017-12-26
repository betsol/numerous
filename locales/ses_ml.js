(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ses_ml', function pluralize_ses_ml(n /*``*/ ) {
        return "other"
    });
}).call(this);