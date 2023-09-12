"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var data_source_1 = require("../data-source");
var order_1 = require("../model/order");
var nodemailer = require("nodemailer");
var user_1 = require("../model/user");
var post_1 = require("../model/post");
var OrderService = /** @class */ (function () {
    function OrderService() {
        var _this = this;
        this.getAllOrders = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from orders o\n                            join post p on o.idPost = p.idPost\n                            join user u on p.idUser = u.idUser\n                    ";
                        return [4 /*yield*/, this.orderRepository.query(sql)];
                    case 1:
                        orders = _a.sent();
                        if (!orders) {
                            return [2 /*return*/, "No orders found"];
                        }
                        return [2 /*return*/, orders];
                }
            });
        }); };
        this.getAllOrdersInSellerService = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var sql, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from orders o\n                            join post p on o.idPost = p.idPost\n                            join user u on p.idUser = u.idUser\n                   where p.idUser = ".concat(id, " ");
                        return [4 /*yield*/, this.orderRepository.query(sql)];
                    case 1:
                        orders = _a.sent();
                        if (!orders) {
                            return [2 /*return*/, "No orders found"];
                        }
                        return [2 /*return*/, orders];
                }
            });
        }); };
        this.getAllOrdersInUserService = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var sql, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from orders o\n                            join post p on o.idPost = p.idPost\n                            join user u on p.idUser = u.idUser\n                   where o.idUser = ".concat(id);
                        return [4 /*yield*/, this.orderRepository.query(sql)];
                    case 1:
                        orders = _a.sent();
                        if (!orders) {
                            return [2 /*return*/, "No orders found"];
                        }
                        return [2 /*return*/, orders];
                }
            });
        }); };
        this.saveOrder = function (order) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderRepository.save(order)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        this.changeStatusOrderService = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var checkOrder, idUser, user, post, email, transporter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderRepository.findOneBy({ idOrder: id })];
                    case 1:
                        checkOrder = _a.sent();
                        idUser = checkOrder.idUser;
                        return [4 /*yield*/, this.userRepository.findOneBy({ idUser: idUser })];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, this.postRepository.findOneBy({ idUser: idUser })];
                    case 3:
                        post = _a.sent();
                        email = user.gmail;
                        if (!!checkOrder) return [3 /*break*/, 4];
                        return [2 /*return*/, null];
                    case 4:
                        if (!(checkOrder.statusOrder === "Wait")) return [3 /*break*/, 8];
                        checkOrder.statusOrder = "Approved";
                        post.view += 1;
                        return [4 /*yield*/, this.postRepository.save(post)];
                    case 5:
                        _a.sent();
                        console.log(22222222222222, post.view);
                        return [4 /*yield*/, this.orderRepository.save(checkOrder)];
                    case 6:
                        _a.sent();
                        transporter = nodemailer.createTransport({
                            service: "gmail",
                            auth: {
                                user: "tranhoangloc502@gmail.com",
                                pass: "enlixpabkfmylwhr"
                            }
                        });
                        return [4 /*yield*/, transporter.sendMail({
                                from: "tranhoangloc502@gmail.com",
                                to: "".concat(email),
                                subject: "Mua thành công",
                                text: "Đơn hàng của bạn đã được nhận"
                            }, function (error, info) {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    console.log("Email sent: " + "lalalalala");
                                }
                            })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        }); };
        this.changeStatusOrderInUser = function (id, idUser) { return __awaiter(_this, void 0, void 0, function () {
            var checkOrder, idUserInOrder;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.orderRepository.findOneBy({ idOrder: id })];
                    case 1:
                        checkOrder = _a.sent();
                        idUserInOrder = checkOrder.idUser;
                        if (!!checkOrder) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(idUserInOrder != idUser)) return [3 /*break*/, 3];
                        return [2 /*return*/, false];
                    case 3:
                        if (!(checkOrder.statusOrder === "Approved")) return [3 /*break*/, 5];
                        checkOrder.statusOrder = "Done";
                        return [4 /*yield*/, this.orderRepository.save(checkOrder)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, false];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.getOrderInDay = function (id, startTime, endTime) { return __awaiter(_this, void 0, void 0, function () {
            var sql, orders;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from orders o\n                            join post p on o.idPost = p.idPost\n                            join user u on p.idUser = u.idUser\n\n                   where o.idPost = ".concat(id, "\n                       and ('").concat(startTime, "' <= o.endTime and o.endTime <= '").concat(endTime, "')\n                      or ('").concat(startTime, "' <= o.startTime and o.startTime <= '").concat(endTime, "')\n        ");
                        return [4 /*yield*/, this.orderRepository.query(sql)];
                    case 1:
                        orders = _a.sent();
                        if (orders.length === 0) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.subtractionDate = function (startTime, endTime) { return __awaiter(_this, void 0, void 0, function () {
            var sql, time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select DATEDIFF( '".concat(endTime, "','").concat(startTime, "' ) as date");
                        return [4 /*yield*/, this.orderRepository.query(sql)];
                    case 1:
                        time = _a.sent();
                        return [2 /*return*/, time[0].date];
                }
            });
        }); };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_1.Orders);
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
    return OrderService;
}());
exports["default"] = new OrderService();
