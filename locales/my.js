var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_my(n) {
    return "other"
};
numerous.addLocale('my', pluralize);