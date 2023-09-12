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
var UserService_1 = require("../service/UserService");
var PostService_1 = require("../service/PostService");
var PersonalService_1 = require("../service/PersonalService");
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.showMyProfile = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params;
                        return [4 /*yield*/, this.userServices.getMyProfile(id.id)];
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
        this.showVip = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userServices.getAllVipService()];
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
        this.showSellerProfile = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params;
                        return [4 /*yield*/, this.postServices.checkSeller(id.id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_3 = _a.sent();
                        res.status(500).json(e_3.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.showProvision = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, this.personalServices.FindNameProvision(id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_4 = _a.sent();
                        res.status(500).json(e_4.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.changePassword = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var checkOldPassword, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, this.userServices.checkOldPassword(req.params.id, req.body.oldPassword)];
                    case 1:
                        checkOldPassword = _a.sent();
                        if (!(checkOldPassword === "User not found")) return [3 /*break*/, 2];
                        return [2 /*return*/, res.status(200).json("User not found")];
                    case 2:
                        if (!(checkOldPassword === false)) return [3 /*break*/, 3];
                        return [2 /*return*/, res.status(200).json("Old password not true")];
                    case 3: return [4 /*yield*/, this.userServices.changePasswordService(req.params.id, req.body.newPassword)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, res.status(200).json("Success")];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_5 = _a.sent();
                        res.status(500).json(e_5.message);
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.register = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var user, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userServices.registerService(req.body)];
                    case 1:
                        user = _a.sent();
                        return [2 /*return*/, res.status(201).json(user)];
                    case 2:
                        e_6 = _a.sent();
                        res.status(500).json(e_6.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.login = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.userServices.checkUserService(req.body)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_7 = _a.sent();
                        res.status(500).json(e_7.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.checkOff = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, this.userServices.offlineService(id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_8 = _a.sent();
                        res.status(500).json(e_8.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.checkRequest = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, response, e_9;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, this.userServices.userRequest(id)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_9 = _a.sent();
                        res.status(500).json(e_9.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.checkAddVip = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var idUser, id, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        idUser = req["decoded"].idUser;
                        id = req.params.id;
                        return [4 /*yield*/, this.userServices.changeAddVip(id, idUser)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                }
            });
        }); };
        this.findByName = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var name_1, response, e_10;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        name_1 = req.params.name;
                        return [4 /*yield*/, this.userServices.findByNameService(name_1)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_10 = _a.sent();
                        res.status(500).json(e_10.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findByGender = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var gender, response, e_11;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        gender = req.params.gender;
                        return [4 /*yield*/, this.userServices.findByGenderService(gender)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_11 = _a.sent();
                        res.status(500).json(e_11.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findByBirthday = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var yearOne, yearSecond, response, e_12;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        yearOne = req.body.yearOne;
                        yearSecond = req.body.yearSecond;
                        return [4 /*yield*/, this.userServices.findByBirthdayService(yearOne, yearSecond)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_12 = _a.sent();
                        res.status(500).json(e_12.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findByTopSixSeller = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response, e_13;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postServices.findByTopSixSellerService()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_13 = _a.sent();
                        res.status(500).json(e_13.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findByTopSixVip = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response, e_14;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postServices.findByTopSixVipService()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_14 = _a.sent();
                        res.status(500).json(e_14.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findByTopTwelfthSeller = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var gender, response, e_15;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        gender = req["decoded"].gender;
                        return [4 /*yield*/, this.postServices.findByTopTwelfthSellerService(gender)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_15 = _a.sent();
                        res.status(500).json(e_15.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.findByTopFourMalesEightFemales = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var response, e_16;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.postServices.findByTopFourMalesEightFemalesService()];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, res.status(200).json(response)];
                    case 2:
                        e_16 = _a.sent();
                        res.status(500).json(e_16.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.userServices = UserService_1["default"];
        this.postServices = PostService_1["default"];
        this.personalServices = PersonalService_1["default"];
    }
    return UserController;
}());
exports["default"] = new UserController();
