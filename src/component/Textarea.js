import React,{useState} from 'react'

export default function Textarea(props) {
    const [text, setText]= useState("");

    const handleUpClick = ()=>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" converted to upper case!","success:")
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" converted to lower case!","success:")
    }

    const handleChange = (event)=>{
        console.log("change")
        setText(event.target.value)
    }
    const clearText=()=>{
        let newText=("")
        setText(newText);
        props.showAlert(" Text Cleared!","success:")
    }

  return (
    <>
    <h2>Enter the Text Below</h2>
    <div className="container" > 
        <div className="mb-3">
        <h2>{props.heading}</h2> 
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark' ? '#4C6793' : 'white', color: props.mode==='dark' ? 'white' : 'black'}} onChange={handleChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className=' btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleUpClick}>Upper case</button>
        <button className=' btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={handleLoClick}>lower case</button>
        <button className=' btn btn-primary mx-2 my-1' disabled={text.length===0} onClick={clearText}>Clear Text</button>


    </div>
    <div className="container my-3" >
        <h2>Count of Words</h2>
        <p>{text.split(/\s+/).filter(()=>{return text.length!=0}).length} words and {text.length} characters</p>
        
        <p>{0.008*text.split(" ").filter(()=>{return text.length!=0}).length} Minutes read</p>
        

    </div>
    </>
  )
} 
