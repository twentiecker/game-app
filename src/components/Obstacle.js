import React from 'react';
import {View, Image} from 'react-native';
import {array, object, string} from 'prop-types';
import Matter from 'matter-js';

const rocket = require('./../assets/rocket.png');

const Obstacle = props => {
  const width = props.size[0];
  const height = props.size[1];
  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - height / 2;

  return (
    <View
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          position: 'absolute',
          left: x,
          top: y,
          width: width,
          borderRadius: 20,
          height: height,
        },
      ]}>
      <Image
        style={{
          width: width,
          height: height,
        }}
        source={rocket}
        resizeMode="stretch"
      />
    </View>
  );
};

export default (world, type, pos, size) => {
  const initialObstacle = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {isStatic: true, friction: 1},
  );

  Matter.World.add(world, [initialObstacle]);

  return {
    body: initialObstacle,
    size: [size.width, size.height],
    type: type,
    scored: false,
    renderer: <Obstacle />,
  };
};

Obstacle.propTypes = {size: array, body: object, color: string};
