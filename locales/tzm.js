var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_tzm(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === Math.floor(n) && n >= 0 && n <= 1 || n === Math.floor(n) && n >= 11 && n <= 99) return "one";
    return "other"
};
numerous.addLocale('tzm', pluralize);