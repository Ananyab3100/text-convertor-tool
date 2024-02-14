import { useState } from "react";

function TextForm() {
  const [text, setText] = useState("");

  const handleUpClick = (event) => {
    //console.log(event);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleInvClick = () => {
   let newText = '';
   newText = text
      .split("")
      .map((char) => {
        if (char.toUpperCase() === char) {
          return  char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
    setText(newText);
  };
  const handleCapClick = () => {
    let newText = '';
    newText = text.split('')
    newText[0] = newText[0].toUpperCase();
    for(let i =1; i<newText.length; i++){
      if(newText[i-1] === ' '){
        newText[i] = newText[i].toUpperCase();
      }
    }
    newText = newText.join('');
     setText(newText);
   };

  const handleOnChange = (event) => {
    console.log(event);
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <label htmlFor="Textarea1" className="form-label">
          <h2>Enter the text to analyze:</h2>
        </label>
        <textarea
          className="form-control"
          onChange={handleOnChange}
          id="Textarea1"
          value={text}
          rows="3"
        ></textarea>
      </div>

      
      <div className="btn-group" role="group" aria-label="Text Controls">
      <button
        type="button"
        onClick={handleUpClick}
        className="btn btn-primary mx-2"
      >
      UpperCase
      </button>
      <button
        type="button"
        onClick={handleLowClick}
        className="btn btn-primary mx-2"
      >
       LowerCase
      </button>

      <button
        type="button"
        onClick={handleInvClick}
        className="btn btn-primary mx-2"
      >
      InverseCase
      </button>

      <button
        type="button"
        onClick={handleCapClick}
        className="btn btn-primary mx-2"
      >
      CapatalizedCase
      </button>

      <button
        type="button"
        onClick={handleClearClick}
        className="btn btn-primary mx-2"
      >
        Clear
      </button>
      </div>
    

      <div className="container my-3">
        <h4>Your Text Summary</h4>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} minutes read</p>
        <h4>Preview</h4>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
