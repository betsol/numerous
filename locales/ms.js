var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ms(n) {
    return "other"
};
numerous.addLocale('ms', pluralize);