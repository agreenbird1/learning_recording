/**
 * 
 * @param target - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * @param propertyKey - 装饰的方法的名字。
 * @param descriptor - 装饰的方法的属性描述符。
 * @returns 
 */
const barkDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);
};

class Dog {
  @barkDecorator
  bark() {}
}

export {};
