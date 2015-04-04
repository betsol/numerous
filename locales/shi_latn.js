var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_shi_latn(n) {
    var i = Math.floor(Math.abs(n));
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 0 || n === 1) return "one";
    if (n === Math.floor(n) && n >= 2 && n <= 10) return "few";
    return "other"
};
numerous.addLocale('shi_latn', pluralize);