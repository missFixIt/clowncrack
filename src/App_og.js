import { useState } from 'react';
function MyComponent() {
  const initialState = Array.from({ length: 4 }).map((_, idx) => {
    return { id: idx + 1, clicked: false };
  });
  const [buttons, setButtons] = useState(initialState);

  function handleButtonClick(buttonId) {
    const nextState = buttons.map(button => {
      if (button.id !== buttonId) {
        return button;
      }
      return { ...button, clicked: !button.clicked };
    });
    setButtons(nextState);
  }

  return (
    <div>
      {buttons.map(button => (
        <button
          key={button.id}
          type="button"
          onClick={() => handleButtonClick(button.id)}
        >
          [{button.id}] {button.clicked ? "Clicked" : "Not clicked"}
        </button>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <h2>Click on each button to see the updated state</h2>
      <MyComponent />
    </div>
  );
}
// import './App.css';
// import { useState } from 'react';
// import sounds from './sounds_list';
// import bruce from './audio/Bruce01.mp3';


// function App() {

//   const [play, setPlay] = useState(false);
//   const clickHandler = (e) => {
//         setPlay(!play);
//         play ? document.getElementById('clown' + e.target.id).pause() : document.getElementById('clown' + e.target.id).play();
//     };
    
//   return (
//     // <section className='clowns'>
//     //   <h1>This Week's Clowns</h1>
//     //   {sounds.map((item) =>
//     //     <div className='clown-item' key={item.id}>
//     //     <audio id={'clown' +  item.id } src={item.url} loop />
//     //     <button id={item.id} onClick={clickHandler}>
//     //       {item.buttonName}
//     //     </button>
//     //   </div>)}
//     // </section>
    
//     <section className='clowns'>
//     <h1>This Week's Clowns</h1>
   
//       <div className='clown-item' key='4'>
//       <audio id='clown4' src={bruce} loop />
//       <button id='4' onClick={clickHandler}>
//        Bruce
//       </button>
//     </div>
//   </section>
//     )
  
// };
// export default App;
