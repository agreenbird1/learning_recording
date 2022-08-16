"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 参数装饰器
 * @param target - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * @param propertyKey - 装饰的参数所属的方法的名字。
 * @param parameterIndex - 当前参数所在的下标
 * @returns 返回的参数将被 ignored
 */
const parameterDecorator = (target, propertyKey, parameterIndex) => {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
};
class rt {
    rtMethod(name, age) {
        console.log("rtMethod");
    }
}
__decorate([
    __param(1, parameterDecorator),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", void 0)
], rt.prototype, "rtMethod", null);
new rt().rtMethod("name", 15);
