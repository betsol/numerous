var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_lag_tz(n) {
    var i = Math.floor(Math.abs(n));
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 0) return "zero";
    if ((i === 0 || i === 1) && !(n === 0)) return "one";
    return "other"
};
numerous.addLocale('lag_tz', pluralize);