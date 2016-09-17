(function () {
    var root = this;
    var numerous;
    if ('function' === typeof require) {
        numerous = require('../lib/numerous.js');
    } else {
        numerous = root.numerous;
    }
    numerous.addLocale('zh_hant_tw', function pluralize_zh_hant_tw(n /**/ ) {
        return "other"
    });
}).call(this);