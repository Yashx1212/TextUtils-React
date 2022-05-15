import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {

    const handleUpClick = () =>{
        //console.log("UpperCase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };

    const handleFunkClick = () => {
        let newText ='';
        for (let i =0; i< text.length ; i++){
            if(i%2){
                newText += text[i].toLowerCase();
            }else{
                newText += text[i].toUpperCase();
            }
        }
        setText(newText);
    };

    const handleClearClick = () => {
        setText('');
    };

    const handleOnChange = (event) =>{
        //console.log("OnChange");
        setText(event.target.value);
    };    

    const [text , setText] = useState('Enter your text here');

    //text = "new text"; // Wrong way to update text
    //setText("new Text"); // Correct way to update text

    return (
        <>
            <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black' }}>
                <h1>{props.head}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="8" value = {text} style={{backgroundColor : props.mode==='dark' ? '#212529' : 'white' , 
                    color : props.mode==='dark' ? 'white' : 'black' }} onChange = {handleOnChange} ></textarea>
                </div>
                <button className={`btn btn-dark mx-2 my-2`} onClick={handleUpClick} disabled = {text.length===0} >Convert to UpperCase</button>
                <button className="btn btn-dark mx-2 my-2" onClick={handleLowClick} disabled = {text.length===0}>Convert to LowerCase</button>
                <button className="btn btn-dark mx-2 my-2" onClick={handleFunkClick} disabled = {text.length===0}>Convert to Funky</button>
                <button className="btn btn-dark mx-2 my-2" onClick={handleClearClick} disabled = {text.length===0}>Clear Text</button>
            </div>
            <div className='container my-3' style={{color : props.mode==='dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
                <p>{text.split(" ").filter((element) => {return element.length !== 0}).length * 0.008} Minutes to Read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    head : PropTypes.string
}
