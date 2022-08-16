/**
 * 属性装饰器
 * @param target - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * @param propertyKey - 装饰的属性的名字。
 */
const propertyDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => {
  console.log(target);
  console.log(propertyKey);
};

/**
 * 参数装饰器
 * @param target - 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
 * @param propertyKey - 装饰的参数所属的方法的名字。
 * @param parameterIndex - 当前参数所在的下标
 * @returns 返回的参数将被 ignored 
 */
const parameterDecorator: ParameterDecorator = (
  target: Object,
  propertyKey: string | symbol,
  parameterIndex: number
) => {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
};

class rt {
  @propertyDecorator
  title: string | undefined;

  rtMethod(name: string, @parameterDecorator age: number) {
    console.log("rtMethod");
  }
}

new rt().title;
export {};
