var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ss_sz(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    return "other"
};
numerous.addLocale('ss_sz', pluralize);