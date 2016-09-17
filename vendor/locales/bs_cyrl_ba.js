(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('bs_cyrl_ba', function pluralize_bs_cyrl_ba(n /**/ ) {
        return "other"
    });
}).call(this);