import Clown from './Clown.js';
import clowns from './clowns_list.js';
import { useRef } from 'react';
//import './cssReset.css';
import './App.css';
import { motion } from 'framer-motion';

//import AnimatedComponent from './bounce.js';
//import BouncingBall from './BouncingBall.js';

export default function App() {
  
  const constraintsRef = useRef(null);
  return (

    <motion.div >
      {/* <AnimatedComponent /> */}
      {/* <BouncingBall /> */}
      <h1>Today's Clowns</h1>
      <motion.div className='clown-container' ref={constraintsRef}>
      {clowns.map(clown => (
        <Clown
          dragConstraints={constraintsRef}
          key={clown.id}
          id={clown.id}
          color={clown.color}
          clownSize={clown.size}
          clownName={clown.clownName}
          url={clown.url}
        />
        
      ))}</motion.div>
    </motion.div>
  );
}