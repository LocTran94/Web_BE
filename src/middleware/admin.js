"use strict";
exports.__esModule = true;
exports.adminAuth = void 0;
var adminAuth = function (req, res, next) {
    if (req.decoded.role === 'admin') {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
};
exports.adminAuth = adminAuth;
