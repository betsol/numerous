var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_root(n) {
    return "other"
};
numerous.addLocale('root', pluralize);