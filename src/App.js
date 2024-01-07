import Clown from './Clown.js';
import clowns from './clowns_list.js';
import { useRef } from 'react';
//import './cssReset.css';
import './App.css';
import { motion } from 'framer-motion';
import getRandomIntInclusive from './getRandomIntInclusive.js';
import getRandomColor from './getRandomColor.js';
//import Start from './MatterJSstart.js';
//import Sleep from './MatterJSSleeping.js'

//import AnimatedComponent from './bounce.js';
//import BouncingBall from './BouncingBall.js';

export default function App() {
  
  const constraintsRef = useRef(null);
  return (
    //<Start/>
    // <>
    //   <Sleep></Sleep>
    //   </>
    <motion.div className='outer-container'>
      {/* <AnimatedComponent /> */}
      {/* <BouncingBall /> */}
      <h1>ClownCrack</h1>
      <h2>Today's Clowns</h2>
      <motion.div className='clown-container' ref={constraintsRef}>
        
      {clowns.map(clown => (
        <Clown
          dragConstraints={constraintsRef}
          key={clown.id}
          id={clown.id}
          clownSize={getRandomIntInclusive(1, 10)}
          clownColor={getRandomColor()}
          clownName={clown.clownName}
          url={clown.url}
        />
        
      ))}</motion.div>
    </motion.div>
  );
}