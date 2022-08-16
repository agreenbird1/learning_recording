const barkDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  // value 对应的就是 bark 内容，已经被重新赋值
  descriptor.value = () => {
    console.log("更改之后的bark");
  };
};

class Dog {
  @barkDecorator
  public static bark() {
    console.log("barkkkk");
  }
}
Dog.bark();
// 无效
Dog.bark = () => {
  console.log("dog bark");
};
export {};
