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
var user_1 = require("../model/user");
var data_source_1 = require("../data-source");
var bcrypt_1 = require("bcrypt");
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_1 = require("../middleware/auth");
var nodemailer = require("nodemailer");
var UserServices = /** @class */ (function () {
    function UserServices() {
        var _this = this;
        this.getAllUserService = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user\n                   where NOT user.role = 'admin'\n        ";
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        }); };
        this.getUserRequest = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user u\n                   where u.ask = 'Yes'\n                     and NOT u.role = 'admin'\n                     and NOT u.role = 'seller'\n                     and NOT u.role = 'Vip'";
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        }); };
        this.getWaitUser = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user\n                   where category = 'Wait'";
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        }); };
        this.getAddVipService = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user u\n                   where addVip = 'Yes'\n                     and NOT u.role = 'Vip'";
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        }); };
        this.getAllVipService = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user\n                   where role = 'Vip'";
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        }); };
        this.getMyProfile = function (idUser) { return __awaiter(_this, void 0, void 0, function () {
            var users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: idUser })];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, users];
                }
            });
        }); };
        this.checkOldPassword = function (idUser, password) { return __awaiter(_this, void 0, void 0, function () {
            var userCheck, passwordCompare;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: idUser })];
                    case 1:
                        userCheck = _a.sent();
                        if (!!userCheck) return [3 /*break*/, 2];
                        return [2 /*return*/, "User not found"];
                    case 2: return [4 /*yield*/, bcrypt_1["default"].compare(password, userCheck.password)];
                    case 3:
                        passwordCompare = _a.sent();
                        if (passwordCompare) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        this.changePasswordService = function (idUser, password) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: idUser })];
                    case 1:
                        user = _b.sent();
                        if (!!user) return [3 /*break*/, 2];
                        return [2 /*return*/, "User not found"];
                    case 2:
                        _a = user;
                        return [4 /*yield*/, bcrypt_1["default"].hash(password, 10)];
                    case 3:
                        _a.password = _b.sent();
                        return [2 /*return*/, this.userRepository.update({ idUser: idUser }, user)];
                }
            });
        }); };
        this.registerService = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var userCheck, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({
                            username: user.username
                        })];
                    case 1:
                        userCheck = _b.sent();
                        if (userCheck) {
                            return [2 /*return*/, "Username already registered"];
                        }
                        _a = user;
                        return [4 /*yield*/, bcrypt_1["default"].hash(user.password, 10)];
                    case 2:
                        _a.password = _b.sent();
                        return [2 /*return*/, this.userRepository.save(user)];
                }
            });
        }); };
        this.checkUserService = function (user) { return __awaiter(_this, void 0, void 0, function () {
            var userCheck, passwordCompare, payload, token, userRes;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ gmail: user.gmail })];
                    case 1:
                        userCheck = _a.sent();
                        if (!!userCheck) return [3 /*break*/, 2];
                        return [2 /*return*/, "User not found"];
                    case 2:
                        if (!(userCheck.status === "lock" || userCheck.category === "Wait")) return [3 /*break*/, 3];
                        return [2 /*return*/, "your account has been locked"];
                    case 3: return [4 /*yield*/, bcrypt_1["default"].compare(user.password, userCheck.password)];
                    case 4:
                        passwordCompare = _a.sent();
                        if (!passwordCompare) {
                            return [2 /*return*/, "Wrong password"];
                        }
                        else {
                            payload = {
                                idUser: userCheck.idUser,
                                username: userCheck.username,
                                role: userCheck.role,
                                gender: userCheck.gender
                            };
                            token = jsonwebtoken_1["default"].sign(payload, auth_1.SECRET, {
                                expiresIn: 36000000
                            });
                            userRes = {
                                idUser: userCheck.idUser,
                                username: userCheck.username,
                                role: userCheck.role,
                                avatar: userCheck.avatar,
                                token: token,
                                gmail: userCheck.gmail,
                                birthday: userCheck.birthday,
                                gender: userCheck.gender,
                                ask: userCheck.ask,
                                category: userCheck.category,
                                status: userCheck.status
                            };
                            return [2 /*return*/, userRes];
                        }
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.offlineService = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var checkUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkUser = _a.sent();
                        if (!!checkUser) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(checkUser.status === "active")) return [3 /*break*/, 4];
                        checkUser.status = "off";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        checkUser.status = "active";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.changeStatus = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var checkUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkUser = _a.sent();
                        if (!!checkUser) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(checkUser.status === "active")) return [3 /*break*/, 4];
                        checkUser.status = "lock";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!(checkUser.status === "lock")) return [3 /*break*/, 6];
                        checkUser.status = "active";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 7];
                    case 6: return [2 /*return*/, "account is offline"];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        this.changeAddVip = function (id, idUser) { return __awaiter(_this, void 0, void 0, function () {
            var checkSeller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkSeller = _a.sent();
                        if (!!checkSeller) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(checkSeller.role != "seller" && id === idUser)) return [3 /*break*/, 3];
                        return [2 /*return*/, false];
                    case 3:
                        if (!(checkSeller.addVip === "No")) return [3 /*break*/, 5];
                        checkSeller.addVip = "Yes";
                        return [4 /*yield*/, this.userRepository.save(checkSeller)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.changeCategory = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var checkUser, email, transporter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkUser = _a.sent();
                        if (!!checkUser) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(checkUser.category === "Wait")) return [3 /*break*/, 5];
                        checkUser.category = "Add";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 3:
                        _a.sent();
                        email = checkUser.gmail;
                        transporter = nodemailer.createTransport({
                            service: "gmail",
                            auth: {
                                user: "tranhoangloc502@gmail.com",
                                pass: "enlixpabkfmylwhr"
                            }
                        });
                        // // Gửi email
                        return [4 /*yield*/, transporter.sendMail({
                                from: "tranhoangloc502@gmail.com",
                                to: "".concat(email),
                                subject: "Đăng ký thành công",
                                text: "Chúc mừng! Bạn đã đăng ký thành công."
                            }, function (error, info) {
                                if (error) {
                                    console.log(error);
                                }
                                else {
                                    console.log("Email sent: " + "lalalalala");
                                }
                            })];
                    case 4:
                        // // Gửi email
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        this.removeUserService = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            return [2 /*return*/, null];
                        }
                        return [2 /*return*/, this.userRepository["delete"]({ idUser: id })];
                }
            });
        }); };
        this.userRequest = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var d, year, checkUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        d = new Date();
                        year = d.getFullYear();
                        return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkUser = _a.sent();
                        if (!!checkUser) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(year - checkUser.birthday.split("-")[0] > 18)) return [3 /*break*/, 5];
                        if (!(checkUser.ask === "No")) return [3 /*break*/, 4];
                        checkUser.ask = "Yes";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, "Bạn chưa đủ tuổi"];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.changeRole = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var checkUser, d, year;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkUser = _a.sent();
                        if (!!checkUser) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        d = new Date();
                        year = d.getFullYear();
                        if (!(checkUser.role === "user" &&
                            year - checkUser.birthday.split("-")[0] > 18)) return [3 /*break*/, 4];
                        checkUser.role = "seller";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, " Bạn đã đăng ký thành công"];
                    case 4: return [2 /*return*/, "Bạn chưa đủ tuổi"];
                }
            });
        }); };
        this.changeSeller = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var checkUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ idUser: id })];
                    case 1:
                        checkUser = _a.sent();
                        if (!!checkUser) return [3 /*break*/, 2];
                        return [2 /*return*/, null];
                    case 2:
                        if (!(checkUser.role == "seller")) return [3 /*break*/, 4];
                        checkUser.role = "Vip";
                        return [4 /*yield*/, this.userRepository.save(checkUser)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, "Bạn đã duyệt thành công"];
                    case 4: return [2 /*return*/, false];
                }
            });
        }); };
        this.findByNameService = function (name) { return __awaiter(_this, void 0, void 0, function () {
            var sql, seller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from post p\n                            join user u on p.idUser = u.idUser\n                   where (u.username like '%".concat(name, "%' or p.namePost like '%").concat(name, "%')\n                     and NOT u.status = 'off'\n        ");
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        seller = _a.sent();
                        return [2 /*return*/, seller];
                }
            });
        }); };
        this.findByGenderService = function (gender) { return __awaiter(_this, void 0, void 0, function () {
            var sql, seller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user u\n                            join post p on u.idUser = p.idUser\n                   where gender = '".concat(gender, "'\n                     and NOT u.status = 'off'\n        ");
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        seller = _a.sent();
                        return [2 /*return*/, seller];
                }
            });
        }); };
        this.findByBirthdayService = function (yearOne, yearSecond) { return __awaiter(_this, void 0, void 0, function () {
            var sql, seller;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "SELECT *\n                   FROM user u\n                            join post p on u.idUser = p.idUser\n                   where (YEAR(CURDATE()) - YEAR (birthday)) >= '".concat(yearOne, "'\n                     and (YEAR(CURDATE()) - YEAR (birthday)) < '").concat(yearSecond, "'\n                     and NOT u.status = 'off'\n        ");
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        seller = _a.sent();
                        return [2 /*return*/, seller];
                }
            });
        }); };
        this.findByGmailService = function (idUser) { return __awaiter(_this, void 0, void 0, function () {
            var sql, gmail;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "SELECT u.gmail\n                   FROM user u\n                   where u.idUser = ".concat(idUser);
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        gmail = _a.sent();
                        return [2 /*return*/, gmail];
                }
            });
        }); };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
    return UserServices;
}());
exports["default"] = new UserServices();
