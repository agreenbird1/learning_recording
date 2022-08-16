// tsconfig.json 中需要进行开启 
// 因为 decorator 是一个实验性的特性

function decorator(target: Object) {}

@decorator
class Rt {}
