var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_nso_za(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === Math.floor(n) && n >= 0 && n <= 1) return "one";
    return "other"
};
numerous.addLocale('nso_za', pluralize);