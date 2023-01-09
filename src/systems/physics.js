import Matter from 'matter-js';
import entities from '../entities';

const Physics = (entities, {time, dispatch}) => {
  let engine = entities.physics.engine;
  Matter.Engine.update(engine, time.delta);
  return entities;
};

export default Physics;
