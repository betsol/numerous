(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('vi_vn', function pluralize_vi_vn(n /**/ ) {
        return "other"
    });
}).call(this);