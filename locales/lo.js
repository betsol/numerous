var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_lo(n) {
    return "other"
};
numerous.addLocale('lo', pluralize);