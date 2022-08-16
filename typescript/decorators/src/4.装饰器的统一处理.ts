// 比如 小狗、小猫都能叫
// 我们可以统一的定义一个方法实现
// 并通过装饰器添加到任意的可能需要它的类上
const bark:ClassDecorator = (target:Function) => {
  target.prototype.bark = (message:string) => {
    console.log(message);
  }
}

@bark
class Dog {
  bark!: Function;
  public eat () {
    this.bark("我是狗，我在吃饭！")
  }
}
new Dog().eat()

@bark
class Cat {
  bark!: Function;
  public eat () {
    this.bark("我是猫，我在吃饭！")
  }
}
new Cat().eat()

// 当然上述内容使用继承同样可以实现
// 同时这里的 eat 也是可以抽离的