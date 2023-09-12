"use strict";
exports.__esModule = true;
exports.postRouter = void 0;
var express_1 = require("express");
var auth_1 = require("../middleware/auth");
var PostController_1 = require("../controller/PostController");
exports.postRouter = (0, express_1.Router)();
exports.postRouter.use(auth_1.auth);
exports.postRouter.get('', PostController_1["default"].getAllPosts); // phân trang theo combonent 1
exports.postRouter.get('/getAllPost2', PostController_1["default"].getAllPosts2); // phân trang theo combonent 2
exports.postRouter.post('/add', PostController_1["default"].createPost);
// postRouter.delete('/remove/:idPost', PostController.removePost)
exports.postRouter.put('/edit/:idUser', PostController_1["default"].editPost);
exports.postRouter.get('/showPosts', PostController_1["default"].getLimitPost);
exports.postRouter.get('/findById/:id', PostController_1["default"].findByIdPost);
exports.postRouter.get('/findPostByIdUser/:id', PostController_1["default"].findByIdUser);
exports.postRouter.get('/countView/:id', PostController_1["default"].countView);
