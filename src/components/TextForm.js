import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase!", "success");
    }
    const handleLoClick = ()=>{
        console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase!", "success");

    }
    const handleOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value)

    }
    const handleClearClick = (event)=>{
        setText("")
        props.showAlert("the text is cleared!", "success");

    }
    const handleReplaceClick = (event)=>{
        setText(text.replace(" ",""))
        props.showAlert("remove one space!", "success");

    }
    const handleCopy = ()=>{
       // var text = document.getElementById("myBox");
       // text.select();
        navigator.clipboard.writeText(text);
       // document.getSelection().removeAllRanges();
        props.showAlert("copied the text!", "success");

    }
    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("removed the extra spaces!", "success");

    }
    const[text, setText] = useState(''); 
  return (
    <>
    <div className="container">
        <h1 style={{color : props.mode === 'dark'? 'white' : 'black'}}>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control"  value={text} style={{backgroundColor : props.mode === 'dark'? '#13466e' : 'white', color : props.mode === 'dark'? 'white' : 'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleReplaceClick}>Remove spaces text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove Extra Spaces</button>



    </div>
    <div className="container my-3" style={{color : props.mode === 'dark'? 'white' : 'black'}}>
<h1>Your text summary</h1>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes read</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
