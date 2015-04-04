var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_sq_mk(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    return "other"
};
numerous.addLocale('sq_mk', pluralize);