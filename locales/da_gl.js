var numerous = require('../lib/numerous.js');
var pluralize = function pluralize_da_gl(n) {
    var i = Math.floor(Math.abs(n)),
        t = parseInt(n.toString().replace(/^[^.]*\.?|0+$/g, ""), 10) || 0;
    if (typeof n === "string") n = parseInt(n, 10);
    if (n === 1 || !(t === 0) && (i === 0 || i === 1)) return "one";
    return "other"
};
numerous.addLocale('da_gl', pluralize);