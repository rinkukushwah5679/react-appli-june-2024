import React, {useState} from 'react'

export default function TextPage(props) {
    const handleUpClick = ()=>{
      // console.log("Uppercase was clicked" + text)
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success")
    };
    const handleLoClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to LowerCase", "success")
    };

    const handleClear = ()=>{
      setText("");
    };

    const handleCopy = ()=>{
      let text = document.getElementById("myBox");
      text.select();
      document.getSelection().removeAllRanges();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text copied", "warning")
    };

    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Removed extra spaces", "danger")
    };

    const HandleonChange = (event)=>{
      // console.log("Handel on change")
      setText(event.target.value)
    };
    const [text, setText] = useState("");
  return (
    <>
    <div className='container' style={{color: props.mode === 'dark' ?  'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} placeholder={text} onChange={HandleonChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Text Copy</button>
        <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ?  'white' : '#042743'}}>
      <h1>You text summary</h1>
      <p>{text.split(/\s+/).filter((ele) =>{return ele.length !== 0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter((ele) =>{return ele.length !== 0}).length} Minutes read</p>
      <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
    </div>
    </>
  )
}
