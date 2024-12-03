import React, { useState } from "react"; //In React, "useState" is a Hook that allows you to add state management to functional components, enabling them to store and update local state values.

export default function TextForm(props) {
  let handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  let RemoveSpaces = () => {
    let newText = text.trim().replace(/\s+/g, " ");
    setText(newText);
    props.showAlert("Extra spaces has been removed", "success");
  };
  let handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied", "success");
  };

  let handleClearClick = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Complete text has been cleard", "success");
  };
  let handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase letter", "success");
  };
  const handleOnChange = (event) => {
    // console.log("On Change"); //Understanding purpose
    setText(event.target.value);
  };
  const [text, setText] = useState(" "); //The line const [text, setText] = useState('Enter text here'); declares a "state variable text" initialized with 'Enter text here' and provides a "function setText" to update its value in a React functional component.
  // text ="new text"; //Wrong way to change state
  // setText("new text"); //Correct way to change state
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            style={{
              background: props.mode === "dark" ? "#01112c" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2 my-1" onClick={RemoveSpaces}>
          Remove Spaces
        </button>
      </div>

      <div
        className="coantainer mx-3 my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h1>Preview</h1>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
