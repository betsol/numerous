(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('vai_latn_lr', function pluralize_vai_latn_lr(n /*``*/ ) {
        return "other"
    });
}).call(this);