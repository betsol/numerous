(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('dz_bt', function pluralize_dz_bt(n /*``*/ ) {
        return "other"
    });
}).call(this);