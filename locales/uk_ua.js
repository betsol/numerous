var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_uk_ua(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length;
    if (typeof n === "string") n = parseInt(n, 10);
    if (v === 0 && i % 10 === 1 && !(i % 100 === 11)) return "one";
    if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 && !(i % 100 >= 12 && i % 100 <= 14)) return "few";
    if (v === 0 && (i % 10 === 0 || v === 0 && (i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 || v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 11 && i % 100 <= 14))) return "many";
    return "other"
};
numerous.addLocale('uk_ua', pluralize);