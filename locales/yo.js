var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_yo(n) {
    return "other"
};
numerous.addLocale('yo', pluralize);