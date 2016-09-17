(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('pa_arab', function pluralize_pa_arab(n /**/ ) {
        return "other"
    });
}).call(this);