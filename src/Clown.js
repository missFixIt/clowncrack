import { useState } from "react";
import invertHex from "./invertHex";
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};




export default function Clown(props) {
    const clownColor = getRandomColor();
    const textColor = '#' + invertHex(clownColor);  
    const width = (props.clownSize * 10)+'px';
    const height = (props.clownSize * 10)+'px';
    const [play, setPlay] = useState(false);
    const clickHandler = () => {
        setPlay(!play);
        play ? document.getElementById('clown' + props.id).pause() : document.getElementById('clown' + props.id).play();
    };
    console.log(width.type, height.type);
    return (
        <div className="clown">
            <button style={
                {
                    backgroundColor: clownColor,
                    color: textColor,
                    fontSize: props.clownSize + 'px',
                    borderRadius: '100%',
                    width: width,
                    height: height
                }
            } onClick={clickHandler} className="button">{props.clownName} {play ? "Stop!" : "Laugh!"}</button>
            <audio id={'clown' +  props.id } src={props.url} loop />
        </div>
    )
    
};

///future stuff
// for playback speed example:    document.getElementById("myAudio").playbackRate = 0.5;
// or to return current playback speed:   audioObject.playbackRate
