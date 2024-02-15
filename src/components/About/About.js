import { useState } from "react"

function About(props) {
  const [mystyle , setMyStyle] = useState({
    color: 'black',
    backgroundColor : 'white',
    })

    const [btntext , setBtnText] = useState('Enable Dark Mode')
   
  const toggleMode = () =>{
    if(mystyle.backgroundColor === 'white'){
        setMyStyle({
            color:'white',
            backgroundColor :'black',
        })
        setBtnText('Enable Light Mode');
    }
    else{
        setMyStyle({
            color:'black',
            backgroundColor :'white',
        })
        setBtnText('Enable Dark Mode');
    }
  }


    return ( <>
    <div className="accordion" style ={mystyle} id="accordionExample my-5">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" style ={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your Text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={mystyle}>
      This feature enables users to gain insights into their text content. It may include functionalities such as word count, character count, readability analysis, sentiment analysis, or keyword extraction. Users can understand various aspects of their text, aiding them in refining their writing or understanding the tone and context better.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style ={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={mystyle}>
      The app prioritizes user experience by offering an intuitive and straightforward interface. It focuses on simplicity and accessibility, ensuring that users can easily navigate through the app's features without encountering complexity. This involves clear and concise instructions, minimalistic design elements, and logical organization of functionalities, facilitating seamless usage for users of all levels of technological proficiency.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" style ={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style ={mystyle}>
      The app is designed to be compatible with various web browsers, ensuring accessibility across different platforms and devices. It undergoes testing and optimization to function effectively on popular browsers such as Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. This compatibility ensures that users can access and utilize the app's features seamlessly regardless of their preferred browser, enhancing its usability and reach.
      </div>
    </div>
  </div>
  <div className ='container my-3'>
   <button type="button" onClick={toggleMode} class="btn btn-primary">{btntext}</button>
    </div>
</div>
    </> );
}

export default About;