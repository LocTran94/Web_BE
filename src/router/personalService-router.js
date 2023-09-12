"use strict";
exports.__esModule = true;
exports.personalServiceRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var PersonalServiceController_1 = require("../controller/PersonalServiceController");
exports.personalServiceRouter = (0, express_1.Router)();
exports.personalServiceRouter.use(auth_1.auth);
exports.personalServiceRouter.post('/add', PersonalServiceController_1["default"].createPersonalService);
