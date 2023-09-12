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
var comment_1 = require("../model/comment");
var CommentService = /** @class */ (function () {
    function CommentService() {
        var _this = this;
        this.getAllCommentsService = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var sql, comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select *\n                   from comment join user on comment.idUser = user.idUser where comment.idPost = ".concat(id);
                        return [4 /*yield*/, this.commentRepository.query(sql)];
                    case 1:
                        comments = _a.sent();
                        if (!comments) {
                            return [2 /*return*/, "No comments found"];
                        }
                        return [2 /*return*/, comments];
                }
            });
        }); };
        this.saveCommentService = function (comment) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository.save(comment)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, "success"];
                }
            });
        }); };
        this.updateCommentService = function (idComment, newComment) { return __awaiter(_this, void 0, void 0, function () {
            var comment;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository.findOneBy({
                            idComment: idComment
                        })];
                    case 1:
                        comment = _a.sent();
                        if (!comment) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.commentRepository.update({ idComment: idComment }, newComment)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newComment];
                }
            });
        }); };
        this.removeCommentService = function (idComment) { return __awaiter(_this, void 0, void 0, function () {
            var comments;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commentRepository.findOneBy({
                            idComment: idComment
                        })];
                    case 1:
                        comments = _a.sent();
                        if (!comments) {
                            return [2 /*return*/, null];
                        }
                        return [4 /*yield*/, this.commentRepository["delete"]({ idComment: idComment })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, "Successfully deleted"];
                }
            });
        }); };
        this.findByIdUserComment = function (idComment) { return __awaiter(_this, void 0, void 0, function () {
            var sql, idUser;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sql = "select comment.idUser from comment where comment.idComment = ".concat(idComment);
                        return [4 /*yield*/, this.commentRepository.query(sql)];
                    case 1:
                        idUser = _a.sent();
                        if (!idUser) {
                            return [2 /*return*/, "Can not findComment"];
                        }
                        return [2 /*return*/, idUser[0].idUser];
                }
            });
        }); };
        this.commentRepository = data_source_1.AppDataSource.getRepository(comment_1.Comment);
    }
    return CommentService;
}());
exports["default"] = new CommentService();
