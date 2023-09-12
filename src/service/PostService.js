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
var post_1 = require("../model/post");
var user_1 = require("../model/user");
var PostService = /** @class */ (function () {
    function PostService() {
        var _this = this;
        this.count = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select count(idPost)\n                   from post ";
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        count = _a.sent();
                        return [2 /*return*/, count];
                }
            });
        }); };
        this.getAll = function (limit, offset) { return __awaiter(_this, void 0, void 0, function () {
            var sql, posts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from post p\n                            join user u on p.idUser = u.idUser\n                   where NOT u.status = 'off' limit ".concat(limit, "\n                   offset ").concat(offset);
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        posts = _a.sent();
                        if (!posts) {
                            return [2 /*return*/, 'No posts found'];
                        }
                        return [2 /*return*/, posts];
                }
            });
        }); };
        this.findById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var sql, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user u\n                            join post p on u.idUser = p.idUser\n                   where p.idPost = ".concat(id);
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        post = _a.sent();
                        return [2 /*return*/, post];
                }
            });
        }); };
        this.findPostByIdUser = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var sql, post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user u\n                            join post p on u.idUser = p.idUser\n                   where p.idUser = ".concat(id);
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        post = _a.sent();
                        return [2 /*return*/, post];
                }
            });
        }); };
        this.saveService = function (post, id) { return __awaiter(_this, void 0, void 0, function () {
            var sql, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select user.role\n                   from user\n                   where idUser = ".concat(id);
                        return [4 /*yield*/, this.userRepository.query(sql)];
                    case 1:
                        result = _a.sent();
                        if (result[0].role === 'user') {
                            return [2 /*return*/, false];
                        }
                        else {
                            return [2 /*return*/, this.postRepository.save(post)];
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.get12Post = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql;
            return __generator(this, function (_a) {
                sql = "SELECT *\n                   FROM post\n                   ORDER BY date DESC limit 12";
                return [2 /*return*/, this.postRepository.query(sql)];
            });
        }); };
        this.updatePost = function (idPost, newPost) { return __awaiter(_this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postRepository.findOneBy({ idPost: idPost })];
                    case 1:
                        post = _a.sent();
                        if (!post) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.postRepository.update({ idPost: idPost }, newPost)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newPost.idUser];
                }
            });
        }); };
        // removePostService = async (idPost) => {
        //     let posts = await this.postRepository.findOneBy({idPost: idPost});
        //     if (!posts) {
        //         return null
        //     }
        //     await this.postRepository.delete({idPost: idPost});
        //     return posts.idUser;
        // }
        this.checkUserPostService = function (idUser) { return __awaiter(_this, void 0, void 0, function () {
            var sql, checkIdPost;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select p.idPost\n                   from user u\n                            join post p on p.idUser = u.idUser\n\n                   where p.idUser = ".concat(idUser);
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        checkIdPost = _a.sent();
                        return [2 /*return*/, checkIdPost[0].idPost];
                }
            });
        }); };
        this.checkSeller = function (idPost) { return __awaiter(_this, void 0, void 0, function () {
            var sql, profile;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from user u\n                            join post p on p.idUser = u.idUser\n                            join personal ps on ps.idPost = p.idPost\n                            join provision pr on ps.idProvision = pr.idProvision\n\n                   where p.idPost = ".concat(idPost);
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        profile = _a.sent();
                        return [2 /*return*/, profile];
                }
            });
        }); };
        this.findPrice = function (idPost) { return __awaiter(_this, void 0, void 0, function () {
            var sql, price;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "SELECT price\n                   from post p\n                   where p.idPost = ".concat(idPost);
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        price = _a.sent();
                        return [2 /*return*/, price[0].price];
                }
            });
        }); };
        this.findByTopSixSellerService = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, sellers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from post p\n                            join user u on p.idUser = u.idUser\n                   ORDER BY view DESC limit 6";
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        sellers = _a.sent();
                        return [2 /*return*/, sellers];
                }
            });
        }); };
        this.findByTopSixVipService = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql, sellers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from post p\n                            join user u on p.idUser = u.idUser\n                   where u.role = 'Vip'\n                   ORDER BY rent DESC limit 6";
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        sellers = _a.sent();
                        return [2 /*return*/, sellers];
                }
            });
        }); };
        this.findByTopTwelfthSellerService = function (gender) { return __awaiter(_this, void 0, void 0, function () {
            var sql, sellers, sql, sellers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(gender === 'nam')) return [3 /*break*/, 2];
                        sql = "SELECT *\n                   FROM post p\n                            JOIN user u ON p.idUser = u.idUser\n                   where u.gender = 'n\u1EEF'\n                   ORDER BY date DESC limit 12";
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 1:
                        sellers = _a.sent();
                        return [2 /*return*/, sellers];
                    case 2:
                        sql = "SELECT *\n                   FROM post p\n                            JOIN user u ON p.idUser = u.idUser\n                   where u.gender = 'nam'\n                   ORDER BY date DESC limit 12";
                        return [4 /*yield*/, this.postRepository.query(sql)];
                    case 3:
                        sellers = _a.sent();
                        return [2 /*return*/, sellers];
                }
            });
        }); };
        this.findByTopFourMalesEightFemalesService = function () { return __awaiter(_this, void 0, void 0, function () {
            var sql1, MalesSellers, sql2, FemalesSellers, sellers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql1 = "select *\n                   from post p\n                            join user u on p.idUser = u.idUser where\n                       u.gender = 'nam'\n                   ORDER BY rent DESC limit 4";
                        return [4 /*yield*/, this.postRepository.query(sql1)];
                    case 1:
                        MalesSellers = _a.sent();
                        sql2 = "select *\n                   from post p\n                            join user u on p.idUser = u.idUser where\n                       u.gender = 'n\u1EEF'\n                   ORDER BY rent DESC limit 8";
                        return [4 /*yield*/, this.postRepository.query(sql2)];
                    case 2:
                        FemalesSellers = _a.sent();
                        sellers = { male: MalesSellers, female: FemalesSellers };
                        return [2 /*return*/, sellers];
                }
            });
        }); };
        this.countViewService = function (idPost) { return __awaiter(_this, void 0, void 0, function () {
            var post;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.postRepository.findOneBy({ idPost: idPost })];
                    case 1:
                        post = _a.sent();
                        post.view += 1;
                        return [4 /*yield*/, this.postRepository.save(post)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
    return PostService;
}());
exports["default"] = new PostService();
