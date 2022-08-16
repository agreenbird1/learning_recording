"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 比如 小狗、小猫都能叫
// 我们可以统一的定义一个方法实现
// 并通过装饰器添加到任意的可能需要它的类上
const bark = (target) => {
    target.prototype.bark = (message) => {
        console.log(message);
    };
};
let Dog = class Dog {
    eat() {
        this.bark("我是狗，我在吃饭！");
    }
};
Dog = __decorate([
    bark
], Dog);
new Dog().eat();
let Cat = class Cat {
    eat() {
        this.bark("我是猫，我在吃饭！");
    }
};
Cat = __decorate([
    bark
], Cat);
new Cat().eat();
// 当然上述内容使用继承同样可以实现
// 同时这里的 eat 也是可以抽离的
