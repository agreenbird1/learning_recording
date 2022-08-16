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
const heightLightDecorator = (target, propertyKey, descriptor) => {
    // 首先保存当前的值
    const oldVal = descriptor.value();
    descriptor.value = () => {
        // 再通过重写样式的方式使得前端接收的是具有样式的值
        return `<div style="color: red;">${oldVal}</div>`;
    };
};
class Serve {
    response() {
        return "serve response";
    }
}
__decorate([
    heightLightDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Serve.prototype, "response", null);
console.log(new Serve().response());
