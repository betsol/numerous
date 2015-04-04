var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_id(n) {
    return "other"
};
numerous.addLocale('id', pluralize);