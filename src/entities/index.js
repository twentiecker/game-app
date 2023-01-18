import Plane from './../components/Plane';
import Matter from 'matter-js';
// import Floor, Ceiling and styleSheet.js
import Floor from '../components/Floor';
import Ceiling from '../components/Ceiling';
import {height, width, heightRatio, widthRatio} from '../utils/styleSheet';

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
  // const boxSize = 50;

  return {
    physics: {engine: engine, world: world},
    // add plane
    Plane: Plane(
      world,
      'pink',
      {x: width / 2, y: height / 2},
      {height: heightRatio * 50, width: widthRatio * 70},
      // {x: 220, y: 400},
      // {height: boxSize, width: boxSize},
    ),
    // add Floor
    Floor: Floor(
      world,
      'white',
      {x: width / 2, y: height - heightRatio * 40},
      {height: heightRatio * 90, width: width},
      // {x: width / 2, y: height - 50},
      // {height: 100, width: width},
    ),
    // add Ceiling
    Ceiling: Ceiling(
      world,
      'white',
      // {x: width / 2, y: -heightRatio * 120},
      // {height: heightRatio * 120, width: width},
      {x: width / 2, y: 0},
      {height: 50, width: width},
    ),
  };
};
