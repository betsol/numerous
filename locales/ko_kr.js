var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ko_kr(n) {
    return "other"
};
numerous.addLocale('ko_kr', pluralize);