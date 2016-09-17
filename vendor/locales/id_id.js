(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('id_id', function pluralize_id_id(n /**/ ) {
        return "other"
    });
}).call(this);