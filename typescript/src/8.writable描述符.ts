const barkDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  // It cannot be reassigned.
  descriptor.writable = false
};

class Dog {
  @barkDecorator
  public static bark() {
    console.log("barkkkk");
  }
}
// 报错，writable 为 false，已经不可被更改
Dog.bark = () => {
  console.log("dog bark");
};
export {};
