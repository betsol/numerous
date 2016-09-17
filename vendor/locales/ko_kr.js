(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ko_kr', function pluralize_ko_kr(n /**/ ) {
        return "other"
    });
}).call(this);