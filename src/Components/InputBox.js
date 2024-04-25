import { useState } from "react";
import {VolumeUp} from "react-bootstrap-icons";
function InputBox(props){   
    const [text, setText] = useState('');
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClickUpper = (event) => {
        setText(text.toUpperCase());
    }
    const handleSpeak = (event) => {
        const msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }
    const handleClickLower = (event) => {
        setText(text.toLowerCase());
    }
    return (
        <>
            <div className="container" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="boxInput" rows="5" onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark' ? 'darkgrey' : 'white', color : props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                    <button className="btn btn-primary mx-2 my-2" type="button" onClick={handleClickUpper}>Upper Case</button>
                    <button className="btn btn-primary mx-2 my-2" type="button" onClick={handleClickLower}>Lower Case</button>
                    <button className="btn btn-primary mx-2 my-2" type="button" onClick={handleSpeak}>Speak<VolumeUp className="mr-2 mx-2" /></button>
                    
                </div>
            </div>
        </>
    );
}
export default InputBox;