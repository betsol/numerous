var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_bm_latn(n) {
    return "other"
};
numerous.addLocale('bm_latn', pluralize);