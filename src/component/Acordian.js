import React from 'react'

export default function Acordian(props) {
        let stylesheet={
          color: props.mode ==='dark'?'white':'black',
          backgroundColor: props.mode ==='dark'?'#164060':'white'
        } 

    
  return (
    <>
    <div className='container my-3'  >
    <h2 className="my-3" style={{color: props.mode==='dark'?'white':'black'}}><strong>About Us</strong></h2>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item"  >
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" style={{backgroundColor: props.mode==='dark'?'#4C6793':'white',color: props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#4C6793':'white',color: props.mode==='dark'?'white':'black'}}>
        Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or

      </div>
    </div>
  </div>
  <div className="accordion-item" style={stylesheet}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'?'#4C6793':'white',color: props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#4C6793':'white',color: props.mode==='dark'?'white':'black'}}>
        Textutils is a free character tool that provides instant character count and word count statistics for a given 
        text. Textutils reports the number of words and characters.Thus it is suitable for writing text with word/character 
        limit.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={stylesheet}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor: props.mode==='dark'?'#4C6793':'white',color: props.mode==='dark'?'white':'black'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode==='dark'?'#4C6793':'white',color: props.mode==='dark'?'white':'black'}}>
        This word counter software works in any web browser such as chrome, firefox, Internet Explorer, Safari, Opera.It 
        suits to count characters in facebool, blog, books, excel document, pdf document, essays,etc. 
      </div>
    </div>
  </div>
</div>
</div>
</>
  )
} 
