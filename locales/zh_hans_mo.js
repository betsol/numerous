(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('zh_hans_mo', function pluralize_zh_hans_mo(n /*``*/ ) {
        return "other"
    });
}).call(this);