"use strict";
exports.__esModule = true;
exports.auth = exports.SECRET = void 0;
exports.SECRET = '123456';
var jsonwebtoken_1 = require("jsonwebtoken");
var auth = function (req, res, next) {
    var authorization = req.headers.authorization;
    if (authorization) {
        var accessToken = req.headers.authorization.split(' ')[1];
        if (accessToken) {
            jsonwebtoken_1["default"].verify(accessToken, exports.SECRET, function (err, payload) {
                if (err) {
                    res.status(401).json({
                        message: 'err 401'
                    });
                }
                else {
                    req.decoded = payload;
                    next();
                }
            });
        }
        else {
            res.status(401).json({
                message: 'not accessToken'
            });
        }
    }
    else {
        res.status(401).json({
            message: 'who are you'
        });
    }
};
exports.auth = auth;
