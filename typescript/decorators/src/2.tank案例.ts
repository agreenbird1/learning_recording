// 装饰器接收的参数就是对应的类的构造函数
const moveDecorator: ClassDecorator = (target: Function) => {
  console.log(target);
  // 对原型进行一些操作
  // 实例化的对象都将拥有这些内容
  target.prototype.getPosition = () => ({ x: 100, y: 100 });
};

@moveDecorator
class Tank {
  getPosition!: Function;
}
const tank = new Tank();
console.log(tank.getPosition());


// 目前对nest的猜测
// 它可以暴露公共的父类，里面包含了所有的我们可能用到的装饰器的内容
// 我们新建的实例化的服务类可以继承它，使得可以使用装饰器并很快捷的达到效果

// 装饰器也是语法糖
// 使用 @ 符号与其他的语言更相似，比如 Java
const moveDecorator1: ClassDecorator = (target: Function) => {
  console.log(target);
  // 对原型进行一些操作
  // 实例化的对象都将拥有这些内容
  target.prototype.getPosition = () => ({ x: 100, y: 100 });
};

class Tank1 {
  getPosition!: Function;
}
moveDecorator1(Tank1)
const tank1 = new Tank1();
console.log(tank.getPosition());