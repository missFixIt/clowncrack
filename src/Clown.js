import { useState } from "react";
import invertHex from "./invertHex";
import { motion } from "framer-motion";




 




export default function Clown(props) {
    const clownColor = props.clownColor;
    const textColor = '#' + invertHex(clownColor);
    const clownSize = props.clownSize;
    const [play, setPlay] = useState(false);
    const [scale, setScale] = useState(false);
    const clickHandler = () => {
        setPlay(!play);
        play ? document.getElementById('clown' + props.id).pause() : document.getElementById('clown' + props.id).play();
        setScale(!scale);
        document.getElementById('clown' + props.id).volume = (clownSize * .1);
    };
    
    return (
        <motion.div className="clown">
            <motion.button
                drag
                dragConstraints={props.dragConstraints}
                animate={scale ?{
                    scale:  1.5,
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
                    fontSize: clownSize /5 + 'rem',
                    borderRadius: '100%',
                    width: clownSize  + 'rem',
                    height: clownSize  + 'rem'
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