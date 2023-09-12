"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Orders = void 0;
var typeorm_1 = require("typeorm");
var Orders = /** @class */ (function () {
    function Orders() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Orders.prototype, "idOrder");
    __decorate([
        (0, typeorm_1.Column)()
    ], Orders.prototype, "idUser");
    __decorate([
        (0, typeorm_1.Column)()
    ], Orders.prototype, "idPost");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], Orders.prototype, "endTime");
    __decorate([
        (0, typeorm_1.Column)({ type: "text" })
    ], Orders.prototype, "startTime");
    __decorate([
        (0, typeorm_1.Column)({ "default": "Wait" })
    ], Orders.prototype, "statusOrder");
    __decorate([
        (0, typeorm_1.Column)({
            nullable: false,
            "default": function () { return "DATE_ADD(NOW())"; },
            type: "timestamp"
        })
    ], Orders.prototype, "dateOfOrder");
    __decorate([
        (0, typeorm_1.Column)()
    ], Orders.prototype, "total");
    Orders = __decorate([
        (0, typeorm_1.Entity)()
    ], Orders);
    return Orders;
}());
exports.Orders = Orders;
