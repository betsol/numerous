var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ha_latn_gh(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    return "other"
};
numerous.addLocale('ha_latn_gh', pluralize);