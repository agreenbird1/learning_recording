const moveDecorator: ClassDecorator = (target: Function) => {
  target.prototype.getPosition = () => ({ x: 100, y: 100 });
};
const playerDecorator: ClassDecorator = (target: Function) => {
  target.prototype.play = () => console.log("play tank");
};

@moveDecorator
@playerDecorator
class Tank {
  getPosition!: Function;
  play!: Function;
}
const tank = new Tank();
console.log(tank.getPosition());
tank.play();

export {}