var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_lt_lt(n) {
    var f = parseInt(n.toString().replace(/^[^.]*\.?/, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (n % 10 === 1 && !(n % 100 >= 11 && n % 100 <= 19)) return "one";
    if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 9 && !(n % 100 >= 11 && n % 100 <= 19)) return "few";
    if (!(f === 0)) return "many";
    return "other"
};
numerous.addLocale('lt_lt', pluralize);