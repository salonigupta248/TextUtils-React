import React, { useState } from 'react'

export default function About(props) {
    
    //const [myStyle, setmyStyle] = useState( {
    //  color: 'black',
    //  backgroundColor: 'white',
    //  border: '2px solid white'
    
    let myStyle = {
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
      border: '0.5px solid',
      borderColor:props.mode === 'dark'?'white':'#042743'
    }
  return (
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}> 
    <h2>About Us</h2>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Analyze your Text      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils gives you a way to analyze your text quickly and efficicently.Be it word count,character count or anything.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" style={myStyle}>
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Free to Use
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</strong> 
      </div>
    </div>
  </div>
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Browser Compatible
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        <strong>This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera.It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong> 
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

