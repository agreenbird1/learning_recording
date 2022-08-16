// 实现：将当前的 string 类型的属性将其改为小写
const lowerPropertyDecorator: PropertyDecorator = (
  target: Object,
  propertyKey: string | symbol
) => {
  let value = "rt";
  // target 是当前实例化的实例对象，所以可以直接劫持
  Object.defineProperty(target, propertyKey, {
    get() {
      return value;
    },
    set(v: string) {
      // 不论大小写，统统转换为小写
      value = v.toLowerCase();
    },
  });
};

class rt {
  @lowerPropertyDecorator
  title!: string;
}

const r = new rt();

console.log(r.title);
r.title = "RT";
console.log(r.title); // rt

export {};
