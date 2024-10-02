import React, { useState } from 'react';
import PropTypes from 'prop-types';


export default function Textform(props) {


    const handleOnChange = (event) => {
        // console.log('On change');
        setText(event.target.value);


    }

    const handlOnClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
    }

    const handlOnClick2 = () => {
        let oldtext = text.toLowerCase();
        setText(oldtext);
    }



    const handlOnClick3 = () => {
        let reversedText = text.split('').reverse().join(''); // Reverse the text
        setText(reversedText);
    };

    const copyElement = () => {
        let text = document.getElementById('mybox');
        text.select();
        text.setSelectionRange(0, text.value.length);  // Corrected method
        navigator.clipboard.writeText(text.value);  // Copies the selected text to clipboard
    }


    const removeExtraSpaces = () => {
        let newText = text.trim().split(/\s+/);
        setText(newText.join(" "));
    }



    const [text, setText] = useState('');
    const wordCount = text.trim() === "" ? 0 : text.split(" ").filter(word => word.length > 0).length;

    return (
        <>

            <div className="mb-3">
                <label for="mybox" className="form-label">{props.heading}</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}></textarea>

                <button className="btn btn-primary my-2" onClick={handlOnClick}>Convert to Uppercase</button>
                <button className="btn btn-danger mx-2" onClick={handlOnClick2}>Convert to Lowercase</button>
                <button className="btn btn-info mx-2" onClick={handlOnClick3}>Reverse text</button>
                <button className="btn btn-info mx-2" onClick={copyElement}>Copy text</button>
                <button className="btn btn-info mx-2" onClick={removeExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3">
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>The text summary</h1>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>The number of words are {wordCount} and number of charecters are {text.length}</p>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}> Minutes to read {0.008 * wordCount}.</p>
                <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>Preview</h3>
                <p style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>{text}</p>
            </div>

        </>
    )
}


Textform.propTypes = {
    heading: PropTypes.string
};

