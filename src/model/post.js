"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Post = void 0;
var typeorm_1 = require("typeorm");
var Post = /** @class */ (function () {
    function Post() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Post.prototype, "idPost");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "namePost");
    __decorate([
        (0, typeorm_1.Column)({ type: 'text' })
    ], Post.prototype, "image");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": function () { return 'DATE_ADD(NOW())'; },
            type: 'timestamp'
        })
    ], Post.prototype, "date");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "description");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "idUser");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "height");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "weight");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "measurement");
    __decorate([
        (0, typeorm_1.Column)()
    ], Post.prototype, "price");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], Post.prototype, "rent");
    __decorate([
        (0, typeorm_1.Column)({ "default": 0 })
    ], Post.prototype, "view");
    Post = __decorate([
        (0, typeorm_1.Entity)()
    ], Post);
    return Post;
}());
exports.Post = Post;
