var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_zh_hans(n) {
    return "other"
};
numerous.addLocale('zh_hans', pluralize);