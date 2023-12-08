import Clown from './Clown.js';
import clowns from './clowns_list.js';
// import './App.css';

export default function App() {
  return (

    <div>
      <h1>Today's Clowns</h1>
      {clowns.map(clown => (
        <Clown
          key={clown.id}
          id={clown.id}
          color={clown.color}
          size={clown.size}
          clownName={clown.clownName}
          url={clown.url}
        />
      ))}
    </div>
  );
}