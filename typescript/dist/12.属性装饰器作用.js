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
Object.defineProperty(exports, "__esModule", { value: true });
// 实现：将当前的 string 类型的属性将其改为小写
const lowerPropertyDecorator = (target, propertyKey) => {
    let value = "rt";
    // target 是当前实例化的实例对象，所以可以直接劫持
    Object.defineProperty(target, propertyKey, {
        get() {
            return value;
        },
        set(v) {
            // 不论大小写，统统转换为小写
            value = v.toLowerCase();
        },
    });
};
class rt {
}
__decorate([
    lowerPropertyDecorator,
    __metadata("design:type", String)
], rt.prototype, "title", void 0);
const r = new rt();
console.log(r.title);
r.title = "RT";
console.log(r.title); // rt
