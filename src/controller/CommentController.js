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
var CommentService_1 = require("../service/CommentService");
var CommentController = /** @class */ (function () {
    function CommentController() {
        var _this = this;
        this.getAllComments = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, comments, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        id = req.params.id;
                        return [4 /*yield*/, this.commentService.getAllCommentsService(id)];
                    case 1:
                        comments = _a.sent();
                        res.status(200).json(comments);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        res.status(500).json(e_1.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.createComment = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var comment, idUser, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        comment = req.body;
                        idUser = req["decoded"].idUser;
                        comment.idUser = idUser;
                        return [4 /*yield*/, this.commentService.saveCommentService(comment)];
                    case 1:
                        _a.sent();
                        res.status(200).json(comment);
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        res.status(500).json(e_2.message);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        this.editComment = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var idUserToken, idComment, idUser, comment, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        idUserToken = req["decoded"].idUser;
                        idComment = req.params.idComment;
                        return [4 /*yield*/, this.commentService.findByIdUserComment(idComment)];
                    case 1:
                        idUser = _a.sent();
                        if (!(idUser == idUserToken)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.commentService.updateCommentService(idComment, req.body)];
                    case 2:
                        comment = _a.sent();
                        res.status(200).json(comment);
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(401).json('invalid');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_3 = _a.sent();
                        res.status(500).json(e_3.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.removeComment = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var idComment, idUserToken, idUser, notification, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 5, , 6]);
                        idComment = req.params.idComment;
                        idUserToken = req["decoded"].idUser;
                        return [4 /*yield*/, this.commentService.findByIdUserComment(idComment)];
                    case 1:
                        idUser = _a.sent();
                        if (!(idUser == idUserToken)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.commentService.removeCommentService(idComment)];
                    case 2:
                        notification = _a.sent();
                        res.status(200).json(notification);
                        return [3 /*break*/, 4];
                    case 3:
                        res.status(401).json('invalid');
                        _a.label = 4;
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        e_4 = _a.sent();
                        res.status(500).json(e_4.message);
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        this.commentService = CommentService_1["default"];
    }
    return CommentController;
}());
exports["default"] = new CommentController();
