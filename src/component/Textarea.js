import React,{useState} from 'react'

export default function Textarea(props) {
    const [text, setText]= useState("");
    //setText("mbkjcuhkcbk");
    const handleUpClick = ()=>{
        //console.log("click handeled carefully");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert(" converted to upper case!","success:")
    }
    const handleLoClick = ()=>{
        //console.log("click handeled carefully");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert(" converted to lower case!","success:")
    }

    const handleChange = (event)=>{
        console.log("change")
        setText(event.target.value)
    }
    // function removeExtraSpaces(text) {
    //     return  setText(String(text).replace(/\s+/g, ' ').trim());
    // }

  return (
    <>
    <h2>Enter the Text Below</h2>
    <div className="container" style={{color: props.mode==='dark' ? 'white' : '#271088'}}>
        <div className="mb-3">
        <h2>{props.heading}</h2> 
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white' ,color: props.mode==='dark' ? 'white' : 'black'}} onChange={handleChange} id="exampleFormControlTextarea1" rows="6"></textarea>
        </div>
        <button className=' btn btn-primary mx-2' onClick={handleUpClick}>Upper case</button>
        <button className=' btn btn-primary mx-2' onClick={handleLoClick}>lower case</button>
        {/* <button type="button" className="btn btn-primary" onClick={removeExtraSpaces}>Remove Extra spaces</button> */}

    </div>
    <div className="container my-3" style={{color: props.mode==='dark' ? 'white' : 'black'}}>
        <h2>Count of Words</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        

    </div>
    </>

  )
} 
