(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('yo_ng', function pluralize_yo_ng(n /*``*/ ) {
        return "other"
    });
}).call(this);