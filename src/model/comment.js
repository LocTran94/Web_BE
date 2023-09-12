"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Comment = void 0;
var typeorm_1 = require("typeorm");
var Comment = /** @class */ (function () {
    function Comment() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Comment.prototype, "idComment");
    __decorate([
        (0, typeorm_1.Column)()
    ], Comment.prototype, "idUser");
    __decorate([
        (0, typeorm_1.Column)()
    ], Comment.prototype, "idPost");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], Comment.prototype, "content");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": function () { return 'DATE_ADD(NOW())'; },
            type: 'timestamp'
        })
    ], Comment.prototype, "dateOfComment");
    __decorate([
        (0, typeorm_1.Column)({ "default": " " })
    ], Comment.prototype, "imageComment");
    Comment = __decorate([
        (0, typeorm_1.Entity)()
    ], Comment);
    return Comment;
}());
exports.Comment = Comment;
