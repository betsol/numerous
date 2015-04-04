var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_pa_guru_in(n) {
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === Math.floor(n) && n >= 0 && n <= 1) return "one";
    return "other"
};
numerous.addLocale('pa_guru_in', pluralize);