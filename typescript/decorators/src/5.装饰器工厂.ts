// 根据参数返回不同的装饰器
// 当然参数也可以更多更复杂，也可以不使用 switch
const barkDecorator = (type: "dog" | "cat"): ClassDecorator => {
  switch (type) {
    case "cat":
      return (target: Function) => {
        target.prototype.bark = () => {
          console.log("喵喵喵");
        };
      };
    default:
      return (target: Function) => {
        target.prototype.bark = () => {
          console.log("汪汪汪");
        };
      };
  }
};

@barkDecorator("dog")
class Dog {
  bark!: Function;
  public eat() {
    this.bark();
  }
}
new Dog().eat();

@barkDecorator("cat")
class Cat {
  bark!: Function;
  public eat() {
    this.bark();
  }
}
new Cat().eat();

export {};
