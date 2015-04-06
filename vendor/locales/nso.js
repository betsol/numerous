var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_nso(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === Math.floor(n) && n >= 0 && n <= 1) return "one";
    return "other"
};
numerous.addLocale('nso', pluralize);