(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('zh_hans_sg', function pluralize_zh_hans_sg(n /**/ ) {
        return "other"
    });
}).call(this);