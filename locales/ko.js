var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ko(n) {
    return "other"
};
numerous.addLocale('ko', pluralize);