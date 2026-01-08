module.exports.isLoggedIn = (req, res, next) => {
    // If user is NOT authenticated
    if (!req.isAuthenticated()) {

        // If it's an API route → return JSON instead of redirect
        if (req.path.startsWith('/api/')) {
            return res.status(401).json({ error: 'Authentication required' });
        }

        // If it's the homepage → show guest homepage instead of redirecting
        if (req.path === '/') {
            return res.render('home-guest', {title : 'AuthWay'});
        }

        // Otherwise redirect to login
        req.session.returnTo = req.originalUrl;
        req.flash('error', 'You must be signed in first');
        return res.redirect('/login');
    }

    // If user IS authenticated and it's the homepage → show logged-in homepage
    if (req.path === '/') {
        return res.render('home-logged-in', { user: req.user, title : 'AuthWay' });
    }

    next();
};