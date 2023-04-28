import React, {useState} from 'react'

export default function Acordian(props) {
    
        const [stylesheet, setmystyle]=useState({
            color:'black',
            backgroundColor:'white'
        })
        const [btntxt,setbtn]=useState("Enable Dark mode")

        const toggle=()=>{
            if(stylesheet.color=='white'){
                setmystyle({
                    color:'black',
                    backgroundColor:'white',
                    
                    
                })
                setbtn("Enable dark mode")
            }
            else{
                setmystyle({
                    color:'white',
                    backgroundColor:'black',
                    border: '1px solid white'
                })
                setbtn("Enable light mode")

            }
        }
    
  return (
    <>
    <div className='container my-3' >
    <h2>About Us</h2>
    <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={stylesheet}>
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" style={stylesheet} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={stylesheet}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={stylesheet}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={stylesheet} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={stylesheet}>
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={stylesheet} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={stylesheet}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
    
  </div>
  <div className='my-3'>
    <button type="button" className="btn btn-success"  onClick={toggle}>{btntxt}</button>
  </div>
</div>
</div>
</>
  )
} 
