// OBSOLETE. KEPT FOR DEMONSTRATION PURPOSES.

const User = require('../database/models/User');

module.exports = (req, res, next) => {
    if (req.session.userId) {
        return res.redirect('/');
    }

    next();
}