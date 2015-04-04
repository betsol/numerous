var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_ar_dj(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 0) return "zero";
    if (n === 1) return "one";
    if (n === 2) return "two";
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10) return "few";
    if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99) return "many";
    return "other"
};
numerous.addLocale('ar_dj', pluralize);