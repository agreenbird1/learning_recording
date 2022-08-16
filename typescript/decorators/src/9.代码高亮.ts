const heightLightDecorator: MethodDecorator = (
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  // 首先保存当前的值
  const oldVal = descriptor.value();
  descriptor.value = () => {
    // 再通过重写样式的方式使得前端接收的是具有样式的值
    return `<div style="color: red;">${oldVal}</div>`;
  };
};

class Serve {
  @heightLightDecorator
  response() {
    return "serve response";
  }
}

console.log(new Serve().response());
