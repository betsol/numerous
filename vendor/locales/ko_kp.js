(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('ko_kp', function pluralize_ko_kp(n /**/ ) {
        return "other"
    });
}).call(this);