var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_sg(n) {
    return "other"
};
numerous.addLocale('sg', pluralize);