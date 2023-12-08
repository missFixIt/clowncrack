
import './App.css';
import { useState } from 'react';
import sounds from './sounds_list';
//import bruce from './audio/Bruce01.mp3';


function App() {


  // for (let i = 0; i < sounds.length; i++){
  //   sounds[i]
    
  // };
  ///a javascript constructor
 // const audioElement = new Audio("car_horn.wav");
    //const audio = document.getElementById("audio_tag");
    const [play, setPlay] = useState(false);
      const clickHandler = (e) => {
        setPlay(!play);
        play ? document.getElementById('clown' + e.target.id).pause() : document.getElementById('clown' + e.target.id).play();
      
    };
    
  return (
    <section className='clowns'>
      <h1>This Week's Clowns</h1>
      
        {/* <button
          onClick={clickHandler}>
          bruce
        </button>
        <audio id="audio_tag" src={bruce} loop/> */}
    
      {sounds.map((item) => <div className='clown-item' key={item.id}>
        <audio id={'clown' +  item.id } src={item.url} loop />
        <button id={item.id}
          // onClick={() => {
          //   let audio=document.getElementById('clown' +  item.id);
          //   play ? setPlay(false) : setPlay(true);
          //   play ? audio.pause() : audio.play();
          // }}
         onClick={clickHandler}
          >
          {item.buttonName}
        </button>
      </div>)} 
      
    </section>
    )
  
};
export default App;
