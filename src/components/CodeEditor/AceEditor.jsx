import React from "react";
import AceEditor from "react-ace";
/* I used Ace Editor because it makes it easier to implement functions and handle browser data.
In it, we have a great possibility of customization and a friendly user interface is generated. */
import './AceEditor.css'
import "ace-builds/src-noconflict/mode-javascript"; // The language file
import "ace-builds/src-noconflict/theme-monokai"; // The theme-file
import "ace-builds/src-noconflict/ace"


function Ace(props) {
  function onChange(newValue) {
    props.onChanged(newValue) //onChange function to update the state
  }

    return (
      <div className="Ace">
        <AceEditor
            placeholder="Start coding!"
            mode="javascript"
            name="blah2"
            width="100%"
            height="100%"
            className="AceEditor"
            theme="monokai"
            fontSize={12}
            showPrintMargin={false}
            showGutter={true}
            highlightActiveLine={true}
            value={props.data} //Get the state in props
            onChange={onChange} //Trigger the function to update the state
            setOptions={{
            showLineNumbers: true,
            tabSize: 2,
            }}/>
      </div>
    );
  }
  
  export default Ace;