(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ja_jp', function pluralize_ja_jp(n /*``*/ ) {
        return "other"
    });
}).call(this);