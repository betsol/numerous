var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_pt_mz(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === Math.floor(n) && n >= 0 && n <= 2 && !(n === 2)) return "one";
    return "other"
};
numerous.addLocale('pt_mz', pluralize);