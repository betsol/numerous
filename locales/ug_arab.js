var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ug_arab(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    return "other"
};
numerous.addLocale('ug_arab', pluralize);