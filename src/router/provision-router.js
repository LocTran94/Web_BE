"use strict";
exports.__esModule = true;
exports.provisionRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var ProvisionController_1 = require("../controller/ProvisionController");
exports.provisionRouter = (0, express_1.Router)();
exports.provisionRouter.use(auth_1.auth);
exports.provisionRouter.get('', ProvisionController_1["default"].getAllProvision);
