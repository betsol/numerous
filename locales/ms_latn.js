var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ms_latn(n) {
    return "other"
};
numerous.addLocale('ms_latn', pluralize);