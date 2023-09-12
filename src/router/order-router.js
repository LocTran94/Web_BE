"use strict";
exports.__esModule = true;
exports.orderRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var OrderController_1 = require("../controller/OrderController");
exports.orderRouter = (0, express_1.Router)();
exports.orderRouter.use(auth_1.auth);
exports.orderRouter.get('/getAllOrdersInSeller/:id', OrderController_1["default"].getAllOrdersInSeller);
exports.orderRouter.get('/getAllOrdersInUser/:id', OrderController_1["default"].getAllOrdersInUser);
exports.orderRouter.get('/getAllOrders', OrderController_1["default"].getAllOrdersInAdmin); // done tag 31 và 32
exports.orderRouter.post('/add', OrderController_1["default"].addOrder);
exports.orderRouter.get('/changeStatusOrder/:id', OrderController_1["default"].changeStatusOrder); // đổi trạng thái order thành approval
exports.orderRouter.get('/changeStatusOrderInUser/:id', OrderController_1["default"].changeStatusOrderInUserController); // đổi trạng thái order thành Done
