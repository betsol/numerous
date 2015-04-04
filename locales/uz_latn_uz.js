var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_uz_latn_uz(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1) return "one";
    return "other"
};
numerous.addLocale('uz_latn_uz', pluralize);