"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// 根据参数返回不同的装饰器
// 当然参数也可以更多更复杂，也可以不使用 switch
const barkDecorator = (type) => {
    switch (type) {
        case "cat":
            return (target) => {
                target.prototype.bark = () => {
                    console.log("喵喵喵");
                };
            };
        default:
            return (target) => {
                target.prototype.bark = () => {
                    console.log("汪汪汪");
                };
            };
    }
};
let Dog = class Dog {
    eat() {
        this.bark();
    }
};
Dog = __decorate([
    barkDecorator("dog")
], Dog);
new Dog().eat();
let Cat = class Cat {
    eat() {
        this.bark();
    }
};
Cat = __decorate([
    barkDecorator("cat")
], Cat);
new Cat().eat();
