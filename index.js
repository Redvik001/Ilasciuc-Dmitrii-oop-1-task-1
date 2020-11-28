"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sausage = exports.Fridge = void 0;
var Product = /** @class */ (function () {
    function Product(id, name) {
        this.price = 0;
        this.units = "шт.";
        this.bought = false;
        this.id = id;
        this.name = name;
        console.log("\u0421\u043E\u0437\u0434\u0430\u043D \u043F\u0440\u043E\u0434\u0443\u043A\u0442 " + this.name + ".");
    }
    Product.prototype.buy = function () {
        if (this.bought)
            return;
        this.bought = true;
        console.log("\u041F\u043E\u0437\u0434\u0440\u0430\u0432\u043B\u044F\u044E, \u0432\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043A\u0443\u043F\u0438\u043B\u0438 \u0442\u043E\u0432\u0430\u0440 \"" + this.name + "\" \u0432 \u043A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 1 " + this.units + " \u0437\u0430 " + this.price + " MDL.");
    };
    ;
    return Product;
}());
var Fridge = /** @class */ (function (_super) {
    __extends(Fridge, _super);
    function Fridge() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.price = 9879;
        return _this;
    }
    Fridge.prototype.repair = function () {
        if (this.bought)
            console.log("\u0421\u0434\u0430\u0442\u044C \u0432 \u0440\u0435\u043C\u043E\u043D\u0442 \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A " + this.name + "? Ok. \u0411\u0443\u0434\u0435\u0442 \u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C \u043A\u0430\u043A \u0447\u0430\u0441\u044B.");
    };
    Fridge.prototype["return"] = function () {
        console.log("\u0416\u0430\u043B\u044C, \u043E\u0447\u0435\u043D\u044C \u0436\u0430\u043B\u044C, \u0447\u0442\u043E \u0432\u044B \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0435 \u043D\u0430\u043C \u0445\u043E\u043B\u043E\u0434\u0438\u043B\u044C\u043D\u0438\u043A " + this.name + ".");
    };
    return Fridge;
}(Product));
exports.Fridge = Fridge;
var Sausage = /** @class */ (function (_super) {
    __extends(Sausage, _super);
    function Sausage(id, name) {
        var _this = _super.call(this, id, name) || this;
        _this.expirationDate = new Date;
        _this.expirationDate.setFullYear(_this.expirationDate.getFullYear());
        _this.price = 112;
        return _this;
    }
    Sausage.prototype.eat = function () {
        if (this.bought)
            console.log("\u041A\u0443\u043F\u0438\u043B\u0438 \u0438 \u0440\u0435\u0448\u0438\u043B\u0438 \u0441\u044A\u0435\u0441\u0442\u044C " + this.name + " \u043F\u0440\u044F\u043C\u043E \u0441\u0434\u0435\u0441\u044C? \u041B\u0430\u0434\u043D\u043E.");
        else
            console.log("\u042D-\u044D-\u044D, \u044D\u0442\u0443 " + this.name + " \u0441\u043D\u0430\u0447\u0430\u043B\u0430 \u043D\u0443\u0436\u043D\u043E \u043A\u0443\u043F\u0438\u0442\u044C!");
    };
    Sausage.prototype.buy = function () {
        _super.prototype.buy.call(this);
        console.log("\u041A\u043E\u043B\u0431\u0430\u0441\u0430 \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0438\u0442, \u0435\u0441\u043B\u0438 \u0447\u0442\u043E.");
    };
    ;
    Sausage.prototype["return"] = function () {
        console.log("\u041D\u0443 \u0432\u0430\u043C \u0436\u0435 \u0433\u043E\u0432\u043E\u0440\u0438\u043B\u0438, \u0447\u0442\u043E " + this.name + " \u0432\u043E\u0437\u0432\u0440\u0430\u0442\u0443 \u043D\u0435 \u043F\u043E\u0434\u043B\u0435\u0436\u0438\u0442, \u0430 \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0430 \u0442\u0435\u043C \u0431\u043E\u043B\u0435\u0435.");
    };
    return Sausage;
}(Product));
exports.Sausage = Sausage;
var sausage1 = new Sausage(1, "Салями 001");
var sausage2 = new Sausage(1, "Салями 002");
var fridge = new Fridge(3, "T-800");
fridge.buy();
sausage1.eat();
sausage1.buy();
sausage1["return"]();
sausage2.buy();
fridge.repair();
fridge["return"]();
