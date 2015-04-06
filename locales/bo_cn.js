(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('bo_cn', function pluralize_bo_cn(n) {
        return "other"
    });
}).call(this);