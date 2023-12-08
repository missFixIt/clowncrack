import { useState } from "react";

export default function Clown(props) {
    const [play, setPlay] = useState(false);
    const clickHandler = () => {
        setPlay(!play);
        play ? document.getElementById('clown' + props.id).pause() : document.getElementById('clown' + props.id).play();
    };
    return (
        <div className="clown">
            <button style={{ backgroundColor: props.color, color: 'white', fontWeight: 'bold', width: props.size, height: props.size, borderRadius: '100%', fontSize: '24px' }} onClick={() => clickHandler(props.id)}>{props.clownName} {play ? "Stop!" : "Laugh!"}</button>
            <audio id={'clown' +  props.id } src={props.url} loop />
        </div>
    )
    
};