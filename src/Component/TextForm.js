import React, { useState } from 'react'

export default function TextForm(props) {
    // On Change 
    // event.target gives you the element that triggered the event. So, event.target.value gives the value of that element
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    // To Uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    // To Lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    // To Capital Case
    const capitalCase = () => {
        let input = document.getElementById("exampleFormControlTextarea1").value;
        let words = input.split(" ");

        for(let i=0; i<words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].substr(1);
        }
        let capitalText = words.join(" ");
        setText(capitalText);
    } 
    // To Clear Text
    const handleClearText = () => {
        let newText = " ";
        setText(newText);
    }

    // Copy to Clickboard
    const copyToClickboard = () => {
        let input = document.getElementById("exampleFormControlTextarea1");
        input.select();
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        {props.showAlert("Copied to Clickboard","success")}

        // Below code can also be used
        /* var txt = document.getElementById("exampleFormControlTextarea1").value;
        navigator.clipboard.writeText(txt);  */
    }

    // To Undo
    const undo = () => {
        let input1 = document.getElementById("exampleFormControlTextarea1");
        input1.select();
        document.execCommand("undo");
        window.getSelection().removeAllRanges();
    }
    // Select All
    const selectAll = () => {
        let input = document.querySelector("#exampleFormControlTextarea1");
        input.select();
        document.execCommand("selectAll");
    }
    // Cut
    const cut = () => {
        let input = document.querySelector("#exampleFormControlTextarea1");
        input.select();
        document.execCommand("cut");
    }
    // Paste
    const paste = () => {
        let text = navigator.clipboard.readText();
        text.then(newtxt => { document.getElementById("exampleFormControlTextarea1").value = newtxt; });
    }
    
    // useState

    const [text, setText] = useState();
    return (
        <>
            <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="mb-3 my-5">
                    <h2 className="d-inline">{props.heading}</h2>
                    <textarea className="form-control my-4" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#37132a':'white', color: props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className="btn btn-success mx-2" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Lowercase</button>
                <button className="btn btn-success mx-2" onClick={capitalCase}>Capitalcase</button>
                <button className="btn btn-danger mx-2" onClick={handleClearText}>Clear Text</button>
                <button className="btn btn-info mx-2" onClick={copyToClickboard}>Copy To Clickboard</button>
                <button className="btn btn-primary mx-2" onClick={undo}>Undo</button>
                <button className="btn btn-primary mx-2" onClick={selectAll}>Select All</button>
                <button className="btn btn-warning mx-2" onClick={cut}>Cut</button>
                <button className="btn btn-success mx-2" onClick={paste}>Paste</button>
            </div>
            {/* <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}> */}
                {/* <h4>Your Text Summary: </h4> */}
                {/* <p>{text.length} characters and {text.split(" ").length} words</p> */}
                {/* <p>{(text.split(" ").length) * 0.008} minutes read</p> */}
            {/* </div> */}
        </>
    )
}

