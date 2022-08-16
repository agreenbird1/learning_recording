// 装饰器工厂的方式进行返回
const sleepDecorator =
  (delay: number): MethodDecorator =>
  (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) => {
    const method = descriptor.value;
    descriptor.value = () => {
      setTimeout(() => method(), delay);
    };
  };

class Serve {
  @sleepDecorator(2000)
  response() {
    console.log("serve response");
  }
}

new Serve().response();

export {};
