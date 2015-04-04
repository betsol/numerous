var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_cs(n) {
    var i = Math.floor(Math.abs(n)),
        v = n.toString().replace(/^[^.]*\.?/, "").length;
    if (typeof n === "string") n = parseInt(n, 10);
    if (i === 1 && v === 0) return "one";
    if (i === Math.floor(i) && i >= 2 && i <= 4 && v === 0) return "few";
    if (!(v === 0)) return "many";
    return "other"
};
numerous.addLocale('cs', pluralize);