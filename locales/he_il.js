var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_he_il(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length;
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 1 && v === 0) return "one";
    if (i === 2 && v === 0) return "two";
    if (v === 0 && !(n >= 0 && n <= 10) && n % 10 === 0) return "many";
    return "other"
};
numerous.addLocale('he_il', pluralize);