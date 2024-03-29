"use strict";
exports.__esModule = true;
exports.router = void 0;
var express_1 = require("express");
var user_router_1 = require("./user-router");
var admin_router_1 = require("./admin-router");
var post_router_1 = require("./post-router");
var provision_router_1 = require("./provision-router");
var order_router_1 = require("./order-router");
var personalService_router_1 = require("./personalService-router");
var comment_router_1 = require("./comment-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/admins', admin_router_1.adminRouter);
exports.router.use('/post', post_router_1.postRouter);
exports.router.use('/provision', provision_router_1.provisionRouter);
exports.router.use('/order', order_router_1.orderRouter);
exports.router.use('/personalService', personalService_router_1.personalServiceRouter);
exports.router.use('/comment', comment_router_1.commentRouter);
