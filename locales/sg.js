(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('sg', function pluralize_sg(n /*``*/ ) {
        return "other"
    });
}).call(this);