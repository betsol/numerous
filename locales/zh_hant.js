var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_zh_hant(n) {
    return "other"
};
numerous.addLocale('zh_hant', pluralize);