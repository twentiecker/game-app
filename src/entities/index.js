import Plane from './../components/Plane';
import Matter from 'matter-js';

//-- Overriding this function because the original references HTMLElement
Matter.Common.isElement = () => false;

export default restart => {
  //-- Cleanup existing entities
  if (restart) {
    Matter.Engine.clear(restart.physics.engine);
  }
  let engine = Matter.Engine.create({enableSleeping: false});
  let world = engine.world;
  world.gravity.y = 0.25;
  const boxSize = 50;
  return {
    physics: {engine: engine, world: world},
    Plane: Plane(
      world,
      'pink',
      {x: 220, y: 400},
      {height: boxSize, width: boxSize},
    ),
  };
};
