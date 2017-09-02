// all credits go for github.com/rafrex
if (window.location.search) {
    var q = {};
    window.location.search.slice(1).split('&').forEach(function(v) {
        var a = v.split('=');
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&');
    });
    if (q.p !== undefined) {
        window.history.replaceState(null, null,
            window.location.pathname.slice(0, -1) + (q.p || '') +
            (q.q ? ('?' + q.q) : '') + window.location.hash
        );
    }
}
