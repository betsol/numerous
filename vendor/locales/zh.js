(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('zh', function pluralize_zh(n /**/ ) {
        return "other"
    });
}).call(this);