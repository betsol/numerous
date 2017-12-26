(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ms_bn', function pluralize_ms_bn(n /*``*/ ) {
        return "other"
    });
}).call(this);