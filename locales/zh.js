var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_zh(n) {
    return "other"
};
numerous.addLocale('zh', pluralize);