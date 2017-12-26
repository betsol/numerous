(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('uz_cyrl_uz', function pluralize_uz_cyrl_uz(n /*``*/ ) {
        return "other"
    });
}).call(this);