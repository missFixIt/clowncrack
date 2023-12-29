import { useState } from "react";
import invertHex from "./invertHex";
import { motion } from "framer-motion";


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
    const width = (props.clownSize * 10) + 'px';
    const height = (props.clownSize * 10)+'px';
    const [play, setPlay] = useState(false);
    const [scale, setScale] = useState(false);
    const clickHandler = () => {
        setPlay(!play);
        play ? document.getElementById('clown' + props.id).pause() : document.getElementById('clown' + props.id).play();
        setScale(!scale);
        document.getElementById('clown' + props.id).volume = (props.clownSize/3 * .1);
    };
    
    return (
        <motion.div className="clown">
            <motion.button
                drag
                dragConstraints={props.dragConstraints}
                animate={scale ?{
                    scale:  2,
                    rotate: 360
                }
            :{scale: 1, rotate:0}}
                transition={{
                    //type: "delay", duration: 1
                    type: "spring", duration: 1, bounce: .8,    stiffness: 260,
      damping: 8
                    //type: "tween", duration: 5
                }}
                onClick={clickHandler}
                className="button"
                style={{
                    backgroundColor: clownColor,
                    color: textColor,
                    fontSize: `${props.clownSize * 2}px`,
                    borderRadius: '100%',
                    width: width,
                    height: height
                }}
            >
                {props.clownName}<br />{play ? "Stop!" : "Laugh!"}
            </motion.button>
            <audio id={'clown' +  props.id } src={props.url} loop />
        </motion.div>
    )
    
};

///future stuff
// for playback speed example:    document.getElementById("myAudio").playbackRate = 0.5;
// or to return current playback speed:   audioObject.playbackRate

///audioObject.volume
///https://developer.mozilla.org/en-US/docs/Web/API/ChannelSplitterNode/ChannelSplitterNode for left/right audio
///https://www.framer.com/motion/use-velocity/ --for changing other properties based on velocity