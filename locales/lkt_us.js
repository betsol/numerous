(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('lkt_us', function pluralize_lkt_us(n /*``*/ ) {
        return "other"
    });
}).call(this);