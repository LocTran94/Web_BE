"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.User = void 0;
var typeorm_1 = require("typeorm");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], User.prototype, "idUser");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "username");
    __decorate([
        (0, typeorm_1.Column)()
    ], User.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)({ "default": "https://cdn-icons-png.flaticon.com/512/25/25634.png" })
    ], User.prototype, "avatar");
    __decorate([
        (0, typeorm_1.Column)({ "default": "user" })
    ], User.prototype, "role");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], User.prototype, "gmail");
    __decorate([
        (0, typeorm_1.Column)({ "default": "active" })
    ], User.prototype, "status");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], User.prototype, "birthday");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], User.prototype, "gender");
    __decorate([
        (0, typeorm_1.Column)({ "default": "No" })
    ], User.prototype, "ask");
    __decorate([
        (0, typeorm_1.Column)({ "default": "Wait" })
    ], User.prototype, "category");
    __decorate([
        (0, typeorm_1.Column)({ "default": "No" })
    ], User.prototype, "addVip");
    User = __decorate([
        (0, typeorm_1.Entity)()
    ], User);
    return User;
}());
exports.User = User;
