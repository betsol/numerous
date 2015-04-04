var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_zh_hans_cn(n) {
    return "other"
};
numerous.addLocale('zh_hans_cn', pluralize);