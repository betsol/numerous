var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_to(n) {
    return "other"
};
numerous.addLocale('to', pluralize);