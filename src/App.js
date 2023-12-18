import Clown from './Clown.js';
import clowns from './clowns_list.js';
//import './cssReset.css';
import './App.css';

//import AnimatedComponent from './bounce.js';
//import BouncingBall from './BouncingBall.js';

export default function App() {
  return (

    <div>
      {/* <AnimatedComponent /> */}
      {/* <BouncingBall /> */}
      <h1>Today's Clowns</h1>
      <div className='clown-container'>
      {clowns.map(clown => (
        <Clown
          key={clown.id}
          id={clown.id}
          color={clown.color}
          clownSize={clown.size}
          clownName={clown.clownName}
          url={clown.url}
        />
        
      ))}</div>
    </div>
  );
}