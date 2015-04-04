var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_th_th(n) {
    return "other"
};
numerous.addLocale('th_th', pluralize);