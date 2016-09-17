(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('shi_latn_ma', function pluralize_shi_latn_ma(n /**/ ) {
        return "other"
    });
}).call(this);