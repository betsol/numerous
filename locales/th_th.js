(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('th_th', function pluralize_th_th(n /*``*/ ) {
        return "other"
    });
}).call(this);