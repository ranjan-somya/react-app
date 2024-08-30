import React, { useState } from 'react'

export default function Textbar(props) {
    let[text,settext]=useState("")

    const clickToUpper=()=>{
        let newText=text.toUpperCase();
        settext(newText);
        props.showAlert("convert to uppercase","success");
    }
    const clickToLower=()=>{
        let newText=text.toLowerCase();
        settext(newText)
        props.showAlert("convert to lowercase","success")
    }
    const clickToClear=()=>{
        let newText="";
        settext(newText);
        props.showAlert("text is cleared","success")
    }

    const clickToChange=(event)=>{
        settext(event.target.value);

    }
    const handleCopy=()=>{
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
         props.showAlert("text is copied !","success")
    }
    const handleExtraspaces=()=>{
        let newText=text.split(/[ ]+/)
        settext(newText.join(" "))
        props.showAlert("Extra Space is removed !","success")
    }
  return (
    <>
     <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.title}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} id="mybox" rows='8' onChange={clickToChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} ></textarea>
            </div>
            <button className='btn btn-outline-primary rounded m-4 ' onClick={clickToUpper}>Convert to upper Case</button>

            <button className='btn btn-outline-danger rounded m-4 ' onClick={clickToLower}>Convert to Lower Case</button>

            
            <button className='btn btn-outline-success rounded m-4 ' onClick={clickToClear}>Convert to clear</button>
            <button className='btn btn-outline-info rounded m-4 ' onClick={handleCopy}>Copy the text</button>

            <button className='btn btn-outline-warning rounded m-4 ' onClick={handleExtraspaces}>Remove the extra spaceses</button>  
                  

        </div> 
        <div className='container   me-auto ' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h2 className='text-start fw-bolder fs-2 '>Summery</h2>
            <p className='fs-3 fst-italic fw-bold' > {text.split(" ").length} words and {text.length} characters</p>
            <p  className='fs-3 fst-italic fw-bold '> {0.008*text.split(" ").length} Munites to be required</p>
            <div className='text-start'>

            <h2 className=''>Preview:</h2>
            <p className=' fst-italic fw-bold'>{text.length>0?text:"Enter something in the text box above to preview"}</p>
            </div>
        </div>
    </>
  )
}
