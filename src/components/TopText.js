import React from 'react'
import { useSpring, animated } from 'react-spring'
import '../Top.css'
import LightSpeed from 'react-reveal/LightSpeed';

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10 - 100}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5 - 100}px,${y / 3.5 - 300}px,0)`

const getRandomInt = (min, max, inc) => {
    min = min || 0;
    inc = inc || 1;
    console.log(Math.floor(Math.random() * (max - min) / inc) * inc + min);
    return Math.floor(Math.random() * (max - min) / inc) * inc + min;
}



export default () => {
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  let mappedImages = [];
  for (let i=1;i<30;i++) {
    
    let xyOffset = [getRandomInt(1,10,1),getRandomInt(-150,250,30),getRandomInt(1,10,1),getRandomInt(-150,250,30)];
    const getTrans = (x,y,a,b,c,d) => `translate3d(${x / xyOffset[0] + xyOffset[1]}px,${y / xyOffset[2] + xyOffset[3] }px,0)`;

    let imageRequire = require(`../assets/bulk/${i}.jpg`);
    let imageDiv = <LightSpeed left={i % 2 === 0 ? true:false} right={i % 2 === 0 ? false:true}><animated.div className="cardMoving" style={{ transform: props.xy.interpolate(getTrans), width: "30vw", height: "30vh",backgroundImage: `url(${imageRequire})` }} /></LightSpeed>;
    mappedImages.push(imageDiv);
  }

  return (
    <div className="d-flex align-items-center flex-column bg-dark pt-5" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
      <animated.div className="card1" style={{ transform: props.xy.interpolate(trans1) }} />
      <animated.div className="card2" style={{ transform: props.xy.interpolate(trans2) }} />
      <animated.div className="card3" style={{ transform: props.xy.interpolate(trans3) }} />
      <animated.div className="card4" style={{ transform: props.xy.interpolate(trans4) }} />
      {mappedImages}
    </div>
  )
}

