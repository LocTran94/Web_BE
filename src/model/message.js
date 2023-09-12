"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Message = void 0;
var typeorm_1 = require("typeorm");
var Message = /** @class */ (function () {
    function Message() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Message.prototype, "idMessage");
    __decorate([
        (0, typeorm_1.Column)()
    ], Message.prototype, "idUser");
    __decorate([
        (0, typeorm_1.Column)()
    ], Message.prototype, "idPost");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], Message.prototype, "content");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": function () { return 'DATE_ADD(NOW())'; },
            type: 'timestamp'
        })
    ], Message.prototype, "dateOfMessage");
    Message = __decorate([
        (0, typeorm_1.Entity)()
    ], Message);
    return Message;
}());
exports.Message = Message;
