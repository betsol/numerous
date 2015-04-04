var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_th(n) {
    return "other"
};
numerous.addLocale('th', pluralize);