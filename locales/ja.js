var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ja(n) {
    return "other"
};
numerous.addLocale('ja', pluralize);