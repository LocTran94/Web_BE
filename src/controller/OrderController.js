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
var OrderService_1 = require("../service/OrderService");
var PostService_1 = require("../service/PostService");
var OrderController = /** @class */ (function () {
    function OrderController() {
        var _this = this;
        this.getAllOrdersInSeller = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var idUser, orders, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        idUser = request.params.id;
                        return [4 /*yield*/, this.oderService.getAllOrdersInSellerService(idUser)];
                    case 1:
                        orders = _a.sent();
                        response.status(200).json(orders);
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        response.status(500).json(error_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllOrdersInAdmin = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var orders, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.oderService.getAllOrders()];
                    case 1:
                        orders = _a.sent();
                        response.status(200).json(orders);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        response.status(500).json(error_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.getAllOrdersInUser = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var idPost, orders, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        idPost = request.params.id;
                        return [4 /*yield*/, this.oderService.getAllOrdersInUserService(idPost)];
                    case 1:
                        orders = _a.sent();
                        response.status(200).json(orders);
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        response.status(500).json(error_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.addOrder = function (request, response) { return __awaiter(_this, void 0, void 0, function () {
            var order, x, y, time, checkOrder, price, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 14, , 15]);
                        order = request.body;
                        x = new Date(order.endTime);
                        y = new Date(order.startTime);
                        order.dateOfOrder = new Date();
                        return [4 /*yield*/, this.oderService.subtractionDate(order.startTime, order.endTime)];
                    case 1:
                        time = _a.sent();
                        return [4 /*yield*/, this.oderService.getOrderInDay(order.idPost, order.startTime, order.endTime)];
                    case 2:
                        checkOrder = _a.sent();
                        return [4 /*yield*/, this.postService.findPrice(order.idPost)];
                    case 3:
                        price = _a.sent();
                        if (!(time >= 0)) return [3 /*break*/, 12];
                        if (!(checkOrder == false)) return [3 /*break*/, 4];
                        response.status(200).json("Bạn chưa thể thuê dịch vụ");
                        return [3 /*break*/, 11];
                    case 4:
                        if (!(y > order.dateOfOrder)) return [3 /*break*/, 6];
                        order.total = (time * 24 + (x.getHours() - y.getHours())) * price;
                        return [4 /*yield*/, this.oderService.saveOrder(order)];
                    case 5:
                        order = _a.sent();
                        response.status(200).json(order);
                        return [3 /*break*/, 11];
                    case 6:
                        if (!(y == order.dateOfOrder)) return [3 /*break*/, 10];
                        if (!(y.getHours() >= order.dateOfOrder.getHours())) return [3 /*break*/, 8];
                        order.total =
                            (time * 24 * price + x.getHours() - y.getHours()) * price;
                        return [4 /*yield*/, this.oderService.saveOrder(order)];
                    case 7:
                        order = _a.sent();
                        response.status(200).json(order);
                        return [3 /*break*/, 9];
                    case 8:
                        response.status(200).json("hãy chọn lại thời gian bắt đầu thuê");
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        response.status(200).json("hãy chọn lại thời gian bắt đầu thuê");
                        _a.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        response.status(200).json("hãy chọn lại thời gian bắt đầu thuê");
                        _a.label = 13;
                    case 13: return [3 /*break*/, 15];
                    case 14:
                        error_4 = _a.sent();
                        response.status(500).json(error_4.message);
                        return [3 /*break*/, 15];
                    case 15: return [2 /*return*/];
                }
            });
        }); };
        this.changeStatusOrder = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, this.oderService.changeStatusOrderService(id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_1 = _a.sent();
                        res.status(500).json(e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.changeStatusOrderInUserController = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var idUser, id, response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        idUser = req["decoded"].idUser;
                        id = req.params.id;
                        return [4 /*yield*/, this.oderService.changeStatusOrderInUser(id, idUser)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_2 = _a.sent();
                        res.status(500).json(e_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.oderService = OrderService_1["default"];
        this.postService = PostService_1["default"];
    }
    return OrderController;
}());
exports["default"] = new OrderController();
